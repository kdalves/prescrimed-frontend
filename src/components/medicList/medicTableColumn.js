import React, { useState } from 'react';
import './medicTableColumn.css';
import DeleteProfissionais from '../../services/ServiceProfissionais/deleteProfissionais';
import GetIDSpecialties from '../../services/ServiceSpecialty/getIDSpecialties';
//import Buttons from '../editDelButton/EditDelButton';
// import deleteIcon from '../../images/deleteColor.png';
// import updateIcon from '../../images/refreshColor.png';
import deleteIcon from '../../images/close.png';
import updateIcon from '../../images/edit-notebook.png';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const MedicTableColumn = ({ medic }) => {

    const deleteProfissional = async (id) => {
        await DeleteProfissionais(id);
    }
    // const [specialties, setSpecialties] = useState([]);

    // const getIDSpecialties = async (value) => {
    //     const response = await GetIDSpecialties(value);
    //     console.log('getIDEspecialdiade:', response.data);
    //     setSpecialties(response.data);
    // }
    // const getIDSpecialties = async (id) => {
    //     const especialtiesID = await api.get(`especialidade/${id}`)
    //     console.log("especialidades", especialtiesID);
    //     return especialtiesID.data.toString();
    // }

    return (
        <tr>
            <td htmlFor="nome">{medic.Nome}</td>
            <td htmlFor="id_categoria">{medic.IdCategoria}</td>
            <td htmlFor="id_especialidade">{medic.IdEspecialidade}</td>
            <td htmlFor="crm">{medic.CRM}</td>
            {/* <td><Buttons routeEdit={`/editarMedico/${medic.IdProfissional}`} delete={deleteProfissional(medic.IdProfissional)}/></td> */}
            <td className="bank-actions"><Link to={`/editarMedico/${medic.IdProfissional}`}><img alt="Update" src={updateIcon} width="25px" /></Link>  <button onClick={() => deleteProfissional(medic.IdProfissional)}><img alt="Delete" src={deleteIcon} width="20px" /></button> </td>
        </tr>
    );
}
export default MedicTableColumn;