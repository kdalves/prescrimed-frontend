import React from "react";
import '../../styles/pages/medicalRecord/MedicalRecordList.css';
import PatientSearch from '../../components/search/patient/patientSearch';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MedicalRecordList() {
    return (

        <div id="page-show-medicalRecord">
            <Sidebar />
            <main>
                <form className="show-medicalRecord-form">
                    <fieldset>
                        <legend>Prontuário do Paciente</legend>
                        <PatientSearch />
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