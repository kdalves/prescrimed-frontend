import React from 'react';
import { Link } from 'react-router-dom';
import DeletePatient from '../../services/ServicePatients/deletePatient';
import formattedDate from '../../utils/formattedDate';
import Buttons from '../editDelButton/EditDelButton';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';


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
            {/* <td><Buttons routeEdit={`/editarPaciente/${patient.IdPaciente}`} delete={deletePatient(patient.IdPaciente)}/></td> */}
            <td className="bank-actions">   <Link to={`/editarPaciente/${patient.IdPaciente}`}><img alt="Update" src={updateIcon} /></Link>  <button onClick={() => deletePatient(patient.IdPaciente)}><img alt="Delete" src={deleteIcon} /></button> </td>
        </tr>
    );
}
export default PatientTableColumn;