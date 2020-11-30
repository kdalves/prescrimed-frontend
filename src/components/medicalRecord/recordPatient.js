import React from 'react';
import './recordPatient.css';

const RecordPatient = () => {

    return (
        <div className="recordPatient-content">
            <div className="patient-search">
                <input className="search-input" />
                <button className="btn btn-search">Buscar</button>
            </div>
            <div className="patient-content">
                <div className="information-content">
                    <div className="item">
                        <input id="Nome" name="Nome" placeholder="Nome" /*onChange={onChange} value={values?.Nome} */ />
                    </div>
                    <div className="item">
                        <input id="NomeSocial" name="NomeSocial" /*onChange={onChange} value={values?.NomeSocial} */ />
                    </div>
                    <div className="item">
                        <input id="Sexo" name="Sexo" /*onChange={onChange} value={values?.Sexo}*/ />
                    </div>
                    <div className="item">
                        <input id="Idade" name="Idade" /*onChange={onChange} value={values?.Idade}*/ />
                    </div>
                    <div className="item">
                        <input id="CPF" name="CPF" /*onChange={onChange} value={values?.CPF} */ />
                    </div>
                </div>
                <div className="allergy-content">
                    <p>Alergias</p>
                    <div className="item">
                        <input id="Alergias" name="Alergias" placeholder="Camarão" /*onChange={onChange} value={values?.Alergias}*/ />
                    </div>
                </div>
                <div className="measures-content">
                    <p>Medidas Antropométricas</p>
                    <div className="measures-item">
                        <label>Peso (kg)</label>
                        <input id="Peso" name="Peso" /*onChange={onChange} value={values?.Peso}*/ />
                    </div>
                    <div className="measures-item">
                        <label>Altura (cm)</label>
                        <input id="Altura" name="Altura" /*onChange={onChange} value={values?.Altura}*/ />
                    </div>
                    <div className="measures-item">
                        <label>Superfície Corporal</label>
                        <input id="Superficie" name="Superficie" /*onChange={onChange} value={values?.Superficie} */ />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordPatient;