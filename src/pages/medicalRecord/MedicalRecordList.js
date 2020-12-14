import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../../styles/pages/medicalRecord/medicalRecord-list.css';
import Sidebar from '../../components/sidebar/Sidebar';
import PatientInformation from '../../components/medicalRecord/recordPatient';
import MedicalRecordPrescriptionSearch from '../../components/search/medicalRecord/medicalRecordSearch';
import loupe from '../../images/loupe64.png';
import ContainerForm from "../../components/UI/container/containerForm";
import AddButton from '../../components/addButton/addButton';
import GetAllPatients from '../../services/ServicePatients/getPatients';
import PostMedicalRecord from "../../services/ServiceMedicalRecord/postMedicalRecord";
import GetMedicalRecord from '../../services/ServiceMedicalRecord/getMedicalRecord';

export default function MedicalRecordList() {
    const [patients, setPatients] = useState();
    const [values, setValues] = useState({});
    const history = useHistory();

    const getAllPatients = async (value) => {
        const response = await GetAllPatients(value);
        console.log(response.data);
        setPatients(response.data);
    }

    const postMedicalRecord = async (value) => {
        const response = await PostMedicalRecord(value)
        console.log('postMedicalRecord list', response);
    }

    useEffect(() => {

        getAllPatients();
    }, [])

    function onSubmit(event) {
        event.preventDefault();
        try {
            postMedicalRecord(values)
                .then((response) => history.push('/cadastroProntuario'))
        } catch (error) {
            console.log('Houve algum problema', error);
        }
    }

    console.log('patients', patients);

    return (

        <div id="page-show-medicalRecord">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-medicalRecord-form" onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Prontuário do Paciente</legend>

                            <PatientInformation />
                            {/* <div className="search-patient">
                                <input type="search" className="search-input" placeholder="Buscar paciente"></input>
                                <a> <img src={loupe} /></a>
                            </div> */}
                        </fieldset>
                        <fieldset>
                            <legend>Prescrições</legend>
                            <div className="medical-prescription-content">
                                <AddButton type="submit" text="Prescrever " route="cadastroProntuario" />
                                <MedicalRecordPrescriptionSearch />
                            </div>
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>
        </div>
    );
}