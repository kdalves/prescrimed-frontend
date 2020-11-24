import React from "react";
import '../../styles/pages//medicines/medicines-list.css';
import MedicineSearch from '../../components/search/medicine/medicineSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom";
import ContainerForm from "../../components/UI/container/containerForm";

export default function MedicinesList() {
    return (

        <div id="page-show-medicines">  {/* trocar id para o css*/}
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-medicines-form">
                        <fieldset>
                            <legend>Medicamentos</legend>
                            <Link to="/cadastroMedicamentos">Adicionar Medicamento</Link>
                            <MedicineSearch />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>

        </div>
    );
}
