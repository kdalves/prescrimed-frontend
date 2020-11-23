import React from 'react';
import './medicTableColumn.css';
import {Link} from 'react-router-dom';
import DeleteProfissionais from '../../services/ServiceProfissionais/deleteProfissionais';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';

const MedicTableColumn = ({ medic, onClickDelete }) => {


    const deleteProfissional = async(id) =>{
        await DeleteProfissionais(id);
    }

    return (
        <tr>
            <td> <label htmlFor="nome">{medic.Nome} </label></td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="crm">{medic.CRM}</td>
            <td className="bank-actions"> <Link to={`/editarMedico/${medic.IdProfissional}`}><img src={updateIcon} /></Link>  <button onClick={() => deleteProfissional(medic.IdProfissional)}><img  src={deleteIcon} /></button> </td>
        </tr>
    );

}
export default MedicTableColumn;