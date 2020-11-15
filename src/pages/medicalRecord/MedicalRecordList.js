import React from "react";
import '../../styles/pages/medicalRecord/medicalRecord-list.css';
import Sidebar from '../../components/sidebar/Sidebar';
import PatientInformation from '../../components/medicalRecord/recordPatient';
import MedicalRecordPrescriptionSearch from '../../components/search/medicalRecord/medicalRecordSearch';
import loupe from '../../images/loupe64.png';

export default function MedicalRecordList() {
    return (

        <div id="page-show-medicalRecord">
            <Sidebar />
            <main>
                <form className="show-medicalRecord-form">
                    <fieldset>
                        <legend>Prontuário do Paciente</legend>
                        <PatientInformation />
                        <div className="search-patient">
                            <a> <img src={loupe} /></a>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Prescrições</legend>
                        <div className="medical-prescription-content">
                            <MedicalRecordPrescriptionSearch />
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    );
}