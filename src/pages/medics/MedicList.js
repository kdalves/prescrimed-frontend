import React from "react";
import '../../styles/pages/medics/medic-list.css';
import MedicSearch from '../../components/search/medic/medicSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from "react-router-dom";
import ContainerForm from "../../components/UI/container/containerForm";

export default function MedicList() {
    const { id } = useParams();

    return (
        <div id="page-show-medic">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-medic-form">
                        <fieldset>
                            <legend>Médicos</legend>
                            <MedicSearch id={id} />              {/* NAO TINHA ESSE ID */}
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );
}
