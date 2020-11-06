import React from 'react';

const MedicTableColumn = ({ medic }) => {

    return (
        <tr>
            <td> <label htmlFor="nome">{medic.Nome} </label></td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="cpf">{medic.CPF}</td>
            <td htmlFor="crm">{medic.CRM}</td>
        </tr>
    );

}
export default MedicTableColumn;