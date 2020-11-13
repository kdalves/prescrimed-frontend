import React from "react";
import '../../styles/pages/medicalRecord/medicalRecord-list.css';
import PatientSearch from '../../components/search/patient/patientSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import PatientInformation from '../../components/medicalRecord/recordPatient';

export default function MedicalRecordList() {
    return (

        <div id="page-show-medicalRecord">
            <Sidebar />
            <main>
                <form className="show-medicalRecord-form">
                    <fieldset>
                        <legend>Prontuário do Paciente</legend>
                        {/* <PatientSearch /> */}
                        <PatientInformation />
                    </fieldset>
                    <fieldset>
                        <legend>Prescrições</legend>
                        {/* chamar tabela de prescrições*/}
                    </fieldset>
                </form>
            </main>
        </div>
    );
}