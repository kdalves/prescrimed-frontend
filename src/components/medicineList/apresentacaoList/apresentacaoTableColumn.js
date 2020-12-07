import React from 'react';
//import './apresentacaoTableColumn.css';
import DeletePresentation from '../../../services/ServiceMedicinePresentation/deleteMedicinePresentation';
import deleteIcon from '../../../images/close.png';
import updateIcon from '../../../images/edit-notebook.png';
import { Link } from 'react-router-dom';

const ApresentacaoTableColumn = ({ presentation }) => {

    const deletePresentation = async (id) => {
        await DeletePresentation(id);
    }

    return (
        <tr>
            <td htmlFor="descricao">{presentation.Descricao}</td>
            <td htmlFor="dose">{presentation.Dose}</td>
            <td htmlFor="unidade_medida">{presentation.UnidadeMedida}</td>
            <td htmlFor="id_via">{presentation.IdVia}</td>
            <td className="bank-actions"><Link to={`/editarApresentacao/${presentation.IdMedicamentoDetalhe}`}><img alt="Update" src={updateIcon} width="25px" /></Link>  <button onClick={() => deletePresentation(presentation.IdMedicamentoDetalhe)}><img alt="Delete" src={deleteIcon} width="20px" /></button> </td>
        </tr>
    );

}
export default ApresentacaoTableColumn;