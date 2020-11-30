import React, { useEffect, useState } from 'react';
import '../../../styles/pages/patients/allergy/allergy-registration.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import ContainerForm from '../../../components/UI/container/containerForm';
import PostAllergy from '../../../services/ServiceAllergy/postAllergy';
import PutAllergy from '../../../services/ServiceAllergy/putAllergy';
import GetIDAllergy from '../../../services/ServiceAllergy/getIDAllergy';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

const initialValue = {
    "IdPaciente": 0,
    "Alergia": ""
}

export default function AllergyRegistration({ id }) {

    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    const postAllergy = async (valor) => {
        const response = await PostAllergy(valor)
        console.log('postAllergy', response);
    }

    const putAllergy = async (id, valor) => {
        const response = await PutAllergy(id, valor)
        console.log('putAllergy', response);
    }

    useEffect(() => {

        const loadAllergy = async (id) => {
            const response = await GetIDAllergy(id);
            console.log('loadAllergy', response);
            setValues(response[0]);
        }

        loadAllergy(id);

    }, []);

    function onChange(event) {
        const { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(event) {
        event.preventDefault();

        try {
            console.log('try id: ', id);
            if (id) {
                putAllergy(id, values)
                    .then(() =>
                        history.push('/cadastroPacientes')
                    );
            } else {
                console.log('postAllergy:');
                postAllergy(values)
                    .then(() => history.push('/cadastroPacientes'));
            }
        } catch (error) {
            console.log('Houve algum problema', error);
        }
    }

    return (
        <div id="page-create-allergy">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="create-allergy-form" onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Adicionar Alergias</legend>
                            <div className="input-block">
                                <label>Alergias</label>
                                <input id="Alergia" name="Alergia" onChange={onChange} value={values?.Alergia} />
                            </div>
                        </fieldset>

                        <button className="confirm-button" type="submit">
                            Confirmar
                        </button>
                    </form>
                </main>
            </ContainerForm>
        </div>
    );


}