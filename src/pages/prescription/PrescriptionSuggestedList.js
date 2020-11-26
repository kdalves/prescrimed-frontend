import React from "react";
import '../../styles/pages//prescription/prescription-suggested.css';
import PrescriptionSuggestedSearch from '../../components/search/prescriptionSuggested/prescriptionSuggestedSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import ContainerForm from '../../components/UI/container/containerForm';
import AddButton from '../../components/addButton/addButton';

export default function PrescriptionSuggestedList() {
    return (

        <div id="page-create-prescription"> 
            <Sidebar />
            <main>
            <ContainerForm>
                <form className="create-prescription-form">
                    <fieldset>
                        <legend>Modelos de Prescrições</legend>
                        <AddButton text="Adicionar Modelo " route="cadastroPrescricaoSugerida" />
                        <PrescriptionSuggestedSearch />
                    </fieldset>
                </form>
            </ContainerForm>    
            </main>
        </div>
    );
}