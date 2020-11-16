import React from 'react';
import './medicTableColumn.css';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import ColumnUpdateRemove from '../tableComponents/columnUpdateRemove';



const MedicTableColumn = ({ medic }) => {

    return (
        <tr>
            <td> <label htmlFor="nome">{medic.Nome} </label></td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="cpf">{medic.CPF}</td>
            <td htmlFor="crm">{medic.CRM}</td>
            <ColumnUpdateRemove />
        </tr>
    );

}
export default MedicTableColumn;