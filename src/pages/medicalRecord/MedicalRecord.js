import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

const initialValue = {
    "Escolha": ""
}

export default function MedicalRecord() {
    const { id } = useParams();
    const [values, setValues] = useState(initialValue);
    console.log(values);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function onChangeType(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();

        // axios.post('http://localhost:3333/pacientes', values)
        //   .then((response) => {
        //     history.push('/listaPacientes')
        //   });
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
                                    <option value={"modelo"}>Modelo de Prescrição</option>
                                    <option value={"nova"}>Nova Prescrição</option>
                                </select>
                            </div>
                            <div className="input-block">
                                <label htmlFor="nationality">Identificação da Prescrição</label>
                                <input id="nationality" onChange={onChange} />
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
                            <button className="confirm-button cancel" type="submit">
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

