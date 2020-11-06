import React from 'react';

const PatientTableColumn = ({ patient }) => {

    return (
        <tr>
            <td> <label htmlFor="nome">{patient.Nome} </label></td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{patient.Nascimento}</td>
        </tr>
    );

}
export default PatientTableColumn;