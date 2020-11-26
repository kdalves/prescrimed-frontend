import React from 'react';

import formattedDate from '../../utils/formattedDate';

const PatientTableColumn = ({ patient }) => {    
    return (
        <tr>
            <td htmlFor="nome">{patient.Nome}</td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{formattedDate(patient.Nascimento)}</td>
            <th></th>
            <th></th>
        </tr>
    );
}
export default PatientTableColumn;