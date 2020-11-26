import React from 'react';
import './medicTableColumn.css';
import {Link} from 'react-router-dom';
import DeleteProfissionais from '../../services/ServiceProfissionais/deleteProfissionais';
import deleteIcon from '../../images/close.png';
import updateIcon from '../../images/edit-notebook.png';

const MedicTableColumn = ({ medic, onClickDelete }) => {


    const deleteProfissional = async(id) =>{
        await DeleteProfissionais(id);
    }

    return (
        <tr>
            <td htmlFor="nome">{medic.Nome}</td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="crm">{medic.CRM}</td>
            <td className="bank-actions"> <Link to={`/editarMedico/${medic.IdProfissional}`}><img src={updateIcon} width="25px" /></Link>  <button onClick={() => deleteProfissional(medic.IdProfissional)}><img  src={deleteIcon}  width="20px" /></button> </td>
        </tr>
    );

}
export default MedicTableColumn;