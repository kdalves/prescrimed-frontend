import React from 'react';
import DeletePatient from '../../services/ServicePatients/deletePatient';
import formattedDate from '../../utils/formattedDate';
import Buttons from '../editDelButton/EditDelButton';


const PatientTableColumn = ({ patient }) => {

    const deletePatient = async (id) => {
        await DeletePatient(id);
    }

    return (
        <tr>
            <td htmlFor="nome">{patient.Nome}</td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{formattedDate(patient.Nascimento)}</td>
            <td><Buttons routeEdit={`/editarPaciente/${patient.IdPaciente}`} delete={deletePatient(patient.IdPaciente)}/></td>
        </tr>
    );
}
export default PatientTableColumn;