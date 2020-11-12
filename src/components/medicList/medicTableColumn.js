import React from 'react';
import './medicTableColumn.css';
import deleteIcon from '../../images/delete.png';
import updateIcon from '../../images/refresh.png';

const MedicTableColumn = ({ medic }) => {

    return (
        <tr>
            <td> <label htmlFor="nome">{medic.Nome} </label></td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="cpf">{medic.CPF}</td>
            <td htmlFor="crm">{medic.CRM}</td>
            <td className="td-acoes-banco"><img src={updateIcon} /> <img src={deleteIcon} /></td>
        </tr>
    );

}
export default MedicTableColumn;