import React from "react";
import '../../styles/pages/medics/medic-list.css';
import MedicSearch from '../../components/search/medic/medicSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import { useParams } from "react-router-dom";

export default function MedicList() {
    const {id} = useParams();

    return (
        <div id="page-show-medic">
            <Sidebar />
            <main>
                <form className="show-medic-form">
                    <fieldset>
                        <legend>Dados do médico:</legend>
                        <MedicSearch id={id} />              {/* NAO TINHA ESSE ID */ }
                    </fieldset>
                </form>
            </main>
        </div>
    );
}
