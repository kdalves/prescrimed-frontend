import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import  '../../styles/pages/prescription/prescription-suggested-registration.css';
import MedicinesSearch from '../../components/search/prescriptionDetails/prescriptionDetailsSearch';

export default function PrescriptionSuggestedRegistration(){
    return(
        <div id="page-create-prescription-regis">
            <Sidebar />
            <main>
                <form className="create-prescription-regis-form">
                    <fieldset>
                        <legend>Prescrições sugeridas</legend>
                        <div className="show-prescription-content">
                            <div className="input-block">
                                <p>Sigla</p>
                                <input/>
                            </div>
                            <div className="input-block">
                                <p>Descrição</p>
                                <input/>
                            </div>
                            <div className="input-block">
                                <p>Indicação</p>
                                <input/>
                            </div>
                        </div>  
                    </fieldset>
                    <fieldset>
                        <MedicinesSearch />
                    </fieldset>
                    <div className="buttons-content">
                        <button className="edit-button delete">Excluir</button>
                        <button className="edit-button">Editar</button>
                    </div>
                    
               </form>
            </main>
        </div>
    );
}