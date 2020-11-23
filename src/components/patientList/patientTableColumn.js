import React from 'react';
// import { 
//     parseISO, 
//     format
//   } from 'date-fns';
  

const PatientTableColumn = ({ patient }) => {

    return (
        <tr>
            <td> <label htmlFor="nome">{patient.Nome} </label></td>
            <td htmlFor="nome_social">{patient.NomeSocial}</td>
            <td htmlFor="cpf">{patient.CPF}</td>
            <td htmlFor="gender">{patient.Sexo}</td>
            <td htmlFor="birth">{ patient.Nascimento}</td>
            {/* <td htmlFor="birth">{ format(parseISO(patient.Nascimento), 'DD/MM/YYYY')}</td> */}
            <th></th>
            <th></th>
        </tr>
    );

}
export default PatientTableColumn;