import React from "react";
import '../../styles/pages//medicines/medicines-list.css';
import MedicineSearch from '../../components/search/medicine/medicineSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom";
import ContainerForm from "../../components/UI/container/containerForm";
import AddButton from '../../components/addButton/addButton';

export default function MedicinesList() {
    return (

        <div id="page-show-medicines">  {/* trocar id para o css*/}
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-medicines-form">
                        <fieldset>
                            <legend>Medicamentos</legend>
                            <AddButton text="Adicionar Medicamento " route="cadastroMedicamentos" />
                            <MedicineSearch />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );
}
