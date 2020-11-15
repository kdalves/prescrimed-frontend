import React from 'react';
import './recordPatient.css';

const RecordPatient = () => {

    return(
            <div className="recordPatient-content">
                <div className="patient-grid">
                    <div className="item"> 
                        <p>Nome</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Sexo</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Fone</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Endereço</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>CEP</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Nome Social</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Nascimento</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Responsável</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Complemento</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Cidade</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>CPF</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Naturalidade</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Fone Responsável</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>Bairro</p>
                        <input /> 
                    </div>
                    <div className="item"> 
                        <p>UF</p>
                        <input /> 
                    </div>
                </div>
                <div className="legends-footer">
                    <p>Alergias</p>
                    <p>Medidas Antropométricas</p>
                </div>
                <div className="patient-footer">
                   <div className="allergy-content"> 
                        <input />
                        <input />
                        <input /> 
                    </div> 
                    <div className="measures-content">
                        <div className="measures-item"> 
                            <p>Peso(kg)</p>
                            <input /> 
                        </div>
                        <div className="measures-item"> 
                            <p>Altura(cm)</p>
                            <input /> 
                        </div>
                        <div className="measures-item"> 
                            <p>Superfície Corporal</p>
                            <input /> 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RecordPatient;