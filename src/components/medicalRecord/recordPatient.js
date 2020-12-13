import React from 'react';
import './recordPatient.css';
import searchPatients from '../../images/loupe32.png';

const RecordPatient = () => {

    return (
        <div className="recordPatient-content">
            <div className="patient-search">
                <input className="search-input" />
                <button className="btn btn-search">
                    <img src={searchPatients} />
                </button>
            </div>
            <div className="patient-content">
                {/* <div className="information-content"> */}
                <div className="measures-content patient">
                    <p>Informações do Paciente</p>
                    {/* <div className="item"> */}
                    <div className="measures-item">
                        <label>Nome</label>
                        <input id="Nome" name="Nome" placeholder="Mikaela Barbosa" disabled="disabled" /*onChange={onChange} value={values?.Nome} */ />
                    </div>
                    {/* <div className="item"> */}
                    <div className="measures-item">
                        <label>Nome Social</label>
                        <input placeholder="Mikaela" id="NomeSocial" name="NomeSocial" disabled="disabled" /*onChange={onChange} value={values?.NomeSocial} */ />
                    </div>
                    {/* <div className="item"> */}
                    <div className="measures-item">
                        <label>Sexo</label>
                        <input placeholder="Feminino" id="Sexo" name="Sexo" disabled="disabled" /*onChange={onChange} value={values?.Sexo}*/ />
                    </div>
                    {/* <div className="item"> */}
                    <div className="measures-item">
                        <label>Idade</label>
                        <input placeholder="18" id="Idade" name="Idade" disabled="disabled" /*onChange={onChange} value={values?.Idade}*/ />
                    </div>
                    {/* <div className="item"> */}
                    <div className="measures-item">
                        <label>CPF</label>
                        <input placeholder="595.836.790-03" id="CPF" name="CPF" disabled="disabled"  /*onChange={onChange} value={values?.CPF} */ />
                    </div>
                </div>
                <div className="measures-content">
                    <p>Medidas Antropométricas</p>
                    <div className="measures-item">
                        <label>Peso (kg)</label>
                        <input className="input-measures" placeholder="70kg" id="Peso" name="Peso" disabled="disabled" /*onChange={onChange} value={values?.Peso}*/ />
                    </div>
                    <div className="measures-item">
                        <label>Altura (cm)</label>
                        <input className="input-measures" placeholder="1.60m" id="Altura" name="Altura" disabled="disabled"  /*onChange={onChange} value={values?.Altura}*/ />
                    </div>
                    <div className="measures-item">
                        <label>Superfície Corporal</label>
                        <input className="input-measures" placeholder="1.73" id="Superficie" name="Superficie" disabled="disabled"  /*onChange={onChange} value={values?.Superficie} */ />
                    </div>
                </div>
            </div>
            <div className="allergy-content">
                <p>Alergias</p>
                <div className="item">
                    <input id="Alergias" name="Alergias" placeholder="Dipirona" disabled="disabled"  /*onChange={onChange} value={values?.Alergias}*/ />
                </div>
            </div>
        </div>
    )
}

export default RecordPatient;