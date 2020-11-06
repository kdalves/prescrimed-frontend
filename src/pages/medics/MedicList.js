import React from "react";
import '../../styles/pages/medics/medic-list.css';
import MedicSearch from '../../components/search/medic/medicSearch';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MedicList() {
    return (

        <div id="page-show-medic">
            <Sidebar />
            <main>
                <form className="show-medic-form">
                    <fieldset>
                        <legend>Dados do médico:</legend>
                        <MedicSearch />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}
