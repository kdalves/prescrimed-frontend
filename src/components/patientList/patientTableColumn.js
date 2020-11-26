import React from 'react';

import formattedDate from '../../utils/formattedDate';
import Buttons from '../editDelButton/EditDelButton';

const PatientTableColumn = ({ patient }) => {    
    return (
        <tr>
            <td htmlFor="nome">{patient.Nome}</td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{formattedDate(patient.Nascimento)}</td>
            <td> <Buttons routeEdit={`lala`} delete={`lala`}/></td>
        </tr>
    );
}
export default PatientTableColumn;