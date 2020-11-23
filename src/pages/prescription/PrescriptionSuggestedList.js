import React from "react";
import '../../styles/pages//prescription/prescription-suggested.css';
import PrescriptionSuggestedSearch from '../../components/search/prescriptionSuggested/prescriptionSuggestedSearch';
import Sidebar from '../../components/sidebar/Sidebar';

export default function PrescriptionSuggestedList() {
    return (

        <div id="page-create-prescription"> 
            <Sidebar />
            <main>
                <form className="create-prescription-form">
                    <fieldset>
                        <legend>Modelos de Prescrições</legend>
                        <PrescriptionSuggestedSearch />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}