import React from "react";
import '../../styles/pages//medicines/medicines-list.css';
import MedicineSearch from '../../components/search/medicine/medicineSearch';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom";

export default function MedicinesList() {
    return (
    
        <div id="page-show-medicines">  {/* trocar id para o css*/ }
        <Sidebar/>
            <main>
            <form className="show-medicines-form"> 
                <fieldset>
                    <legend>Medicamentos Cadastrados</legend>
                    <Link to="/cadastroMedicamentos">Adicionar Medicamento</Link>
                    <MedicineSearch />
                </fieldset>  
            </form>
            </main>
        </div>
    );
}
