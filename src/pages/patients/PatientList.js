import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages//patients/patient-list.css';
import PatientSearch from '../../components/search/patient/patientSearch';
import ContainerForm from "../../components/UI/container/containerForm";
import { useParams } from "react-router-dom";
import AddButton from '../../components/addButton/addButton';

export default function PatientList() {
    const { id } = useParams();
    return (
        <div id="page-show-patient">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-patient-form">
                        <fieldset>
                            <legend>Pacientes</legend>
                            <AddButton text="Adicionar Paciente " route="cadastroPacientes" />
                            <PatientSearch id={id} />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );


}
