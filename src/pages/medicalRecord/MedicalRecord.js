import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import '../../styles/pages/medicalRecord/medicalRecord-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import AddMedicines from '../../components/medicalRecord/addMedicines';
import MedicalRecordPatientList from "../../components/medicalRecord/medicalRecordPatientList";
import plusIcon from '../../images/plus.png';
import ContainerForm from "../../components/UI/container/containerForm";
import AllergySearch from "../../components/search/allergy/allergySearch";
import AddButton from '../../components/addButton/addButton';
import TableMedicines from "../../components/medicalRecord/tableMedicines/tableMedicines";
import PostMedicalRecord from '../../services/ServiceMedicalRecord/postMedicalRecord';
import PutMedicalRecord from '../../services/ServiceMedicalRecord/putMedicalRecord';
import FormateDate from '../../utils/formattedDate';
import GetMedicalRecord from "../../services/ServiceMedicalRecord/getMedicalRecord";

const date = new Date();

const initialValue = {
    "Escolha": "",
    "Identificacao": "",
    "Data": "1904-06-17",
    "IdProfissional": 58,
    "Situacao": "G",
    "DataAssinatura": "1904-06-17",
    "IdUsuario": 31,
    "IdPaciente": 6
}

export default function MedicalRecord({ idPatient, idProfissional, IdUsuario }) {
    const { id } = useParams();
    const [values, setValues] = useState(initialValue);
    const [medicalRecord, setMedicalRecord] = useState([]);

    const history = useHistory();
    const { goBack } = useHistory();

    console.log('medical record values', values);
    const lastMedicalRecord = medicalRecord[medicalRecord.length - 1];
    console.log('medicalRecord state: ', lastMedicalRecord);

    const getMedicalRecord = async (value) => {
        const response = await GetMedicalRecord(value);
        console.log(response.data);
        setMedicalRecord(response.data);
    }

    const postMedicalRecord = async (value) => {
        const response = await PostMedicalRecord(value)
        console.log('postMedicalRecord', response);
    }

    const putMedicalRecord = async (value) => {
        const response = await PutMedicalRecord(value)
        console.log('putMedicalRecord', response);
    }

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function onChangeType(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    useEffect(() => {

        getMedicalRecord();
    }, [])

    function onSubmit(event) {
        event.preventDefault();

        // axios.post('http://localhost:3333/pacientes', values)
        //   .then((response) => {
        //     history.push('/listaPacientes')
        //   });
        try {
            // if (id) {
            putMedicalRecord(lastMedicalRecord.IdPrescricao, values)
                .then((response) => history.push('/prontuario'));
            console.log('put foi');
            // } else {
            //     // postMedicalRecord(values)
            //     //     .then((response) => history.push('/prontuario'))
            //     //     .catch((error) => console.log('Erro: ', error));
            //     console.log('ta no else');
            // }
        } catch (error) {
            console.log('Houve algum problema', error);
        }
    }

    return (
        <div id="page-create-medicalRecord">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="create-medicalRecord-form" onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Prescrição</legend>

                            <div className="input-block select">
                                <label htmlFor="opcao_modelo" for="opcao_modelo">Criar Prescições a partir de </label>
                                <select onChange={onChangeType} htmlFor="opcao_modelo" name="Escolha" id="Escolha" form="opcaoform">
                                    <option value={"nova"}>Nova Prescrição</option>
                                    <option value={"modelo"}>Modelo de Prescrição</option>
                                </select>
                            </div>
                            <div className="input-block">
                                <label htmlFor="identificacao">Identificação da Prescrição</label>
                                <input id="Identificacao" name="Identificacao" onChange={onChange} value={values?.Identificacao} />
                            </div>
                            <div className="prescription-content">
                                <p>Informações Paciente</p>
                                <MedicalRecordPatientList id={id} />
                                <AllergySearch id={id} />
                            </div>
                        </fieldset>
                        <fieldset className="field-medic">
                            <legend>Medicamentos</legend>

                            <AddMedicines />
                            <div className="plus-content">
                                <AddButton text="Adicionar Medicamentos " route="cadastroProntuario" />
                            </div>
                            <TableMedicines />
                        </fieldset>

                        <div className="buttons-content">
                            <button type="button" className="confirm-button cancel" onClick={goBack}>
                                Voltar
                            </button>
                            <button className="confirm-button" type="submit">
                                Salvar
                            </button>
                            <button className="confirm-button" type="submit">
                                Salvar e Assinar
                        </button>
                        </div>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );
}

