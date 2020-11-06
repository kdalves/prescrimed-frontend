import React from "react";
import '../../styles/pages//prescription/prescription-suggested.css';
import PrescriptionSuggestedSearch from '../../components/search/prescriptionSuggested/prescriptionSuggestedSearch';
import Sidebar from '../../components/sidebar/Sidebar';

export default function PrescriptionSuggestedList() {
    return (

        <div id="page-create-prescription"> 
            <Sidebar />
            <main>
                <form className="create-prescription-form"> {/* TROCAR CSS */}
                    <fieldset>
                        <legend>Prescrições sugeridas cadastradas</legend>
                        <PrescriptionSuggestedSearch />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}