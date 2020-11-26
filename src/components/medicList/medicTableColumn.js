import React from 'react';
import './medicTableColumn.css';
import DeleteProfissionais from '../../services/ServiceProfissionais/deleteProfissionais';
import Buttons from '../editDelButton/EditDelButton';

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
            <td> <Buttons routeEdit={`/editarMedico/${medic.IdProfissional}`} delete={deleteProfissional(medic.IdProfissional)}/></td>
        </tr>
    );

}
export default MedicTableColumn;