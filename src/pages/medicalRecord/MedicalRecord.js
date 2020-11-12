import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../styles/pages/medicalRecord/medicalRecord-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import AddMedicines from '../../components/medicalRecord/addMedicines';
import MedicalRecordPatient from '../../components/medicalRecord/medicalRecordPatientList';
import MedicalRecordPatientList from "../../components/medicalRecord/medicalRecordPatientList";
import plusIcon from '../../images/plus.png';

const initialValue = {

}

export default function MedicalRecord() {

    const [values, setValues] = useState(initialValue);

    function onChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();

        // axios.post('http://localhost:3333/pacientes', values)
        //   .then((response) => {
        //     history.push('/listaPacientes')
        //   });
    }

    return (
        <div id="page-create-medicalRecord">
            <Sidebar />
            <main>
                <form className="create-medicalRecord-form" onSubmit={onSubmit}>
                   
                    <fieldset>
                        <legend>Prescrição</legend>
                        <div className="prescription-content">
                            <MedicalRecordPatientList />
                            <div className="input-block">
                                <label htmlFor="nationality">Identificação da Prescrição</label>
                                <input id="nationality" onChange={onChange} />
                             </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Medicamento</legend>
                        <div className="plus-content">
                            <a> 
                                <img className="plus-medicine" src={plusIcon}/> 
                            </a>
                        </div>
                        
                    <AddMedicines />
                    </fieldset>
                   
                    <div className="buttons-content">
                        <button className="confirm-button cancel" type="submit">
                            Cancelar
                        </button>
                        <button className="confirm-button" type="submit">
                            Salvar
                        </button>
                        <button className="confirm-button" type="submit">
                            Salvar e Assinar
                        </button>
                    </div>



                </form>
            </main>
        </div>
    );
}

