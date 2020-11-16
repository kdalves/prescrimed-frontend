import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import plusIcon from '../../images/plus.png'
import AddMedicines from '../../components/medicalRecord/addMedicines';

export default function NewMedicine() {
    return (
        <div id="page-create-prescription"> 
            <Sidebar />
            <main>
                <form className="create-prescription-form"> {/* TROCAR CSS */}
                    <fieldset>
                        <legend>Adicionar Medicamento</legend>
                        <div className="plus-content">
                            <a> 
                                <img className="plus-medicine" src={plusIcon}/> 
                            </a>
                        </div>
                        
                    <AddMedicines />
                    </fieldset>
                </form>
            </main>
        </div>
    );
}