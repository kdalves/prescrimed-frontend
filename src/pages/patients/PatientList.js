import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages//patients/patient-list.css';
import PatientSearch from '../../components/search/patient/patientSearch';
import ContainerForm from "../../components/UI/container/containerForm";

export default function PatientList() {
    return (

        <div id="page-show-patient">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-patient-form">
                        <fieldset>
                            <legend>Pacientes</legend>
                            <PatientSearch />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );


}
