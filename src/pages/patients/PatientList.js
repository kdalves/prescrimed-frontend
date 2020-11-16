import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages//patients/patient-list.css';
import PatientSearch from '../../components/search/patient/patientSearch';

export default function PatientList() {
    return (

        <div id="page-show-patient"> 
            <Sidebar />
            <main>
                <form className="show-patient-form">
                    <fieldset>
                        <legend>Pacientes cadastrados</legend>
                        <PatientSearch />
                    </fieldset>
                </form>
            </main>
        </div>
    );


}
