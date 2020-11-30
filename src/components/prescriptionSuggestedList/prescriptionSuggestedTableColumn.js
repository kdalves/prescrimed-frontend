import React from 'react';
import DeletePrescription from '../../services/ServicePrescriptions/deletePrescription';
import Buttons from '../editDelButton/EditDelButton';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import { Link } from 'react-router-dom';

const PrescriptionSuggestedTableColumn = ({ prescriptionSuggested }) => {

    const deletePrescription = async (id) => {
        await DeletePrescription(id);
    }

    return (
        <tr>
            <td> <label htmlFor="protocolo_sigla">{prescriptionSuggested.Sigla} </label></td>
            <td htmlFor="protocolo_descricao">{prescriptionSuggested.Descricao}</td>
            <td htmlFor="protocolo_indicacao">{prescriptionSuggested.Indicacao}</td>
            {/* <td><Buttons routeEdit={`/editarPrescricaoSugerida/${prescriptionSuggested.IdProtocolo}`} delete={deletePrescription(prescriptionSuggested.IdProtocolo)}/></td>           */}
            <td className="bank-actions">   <Link to={`/editarProtocolo/${prescriptionSuggested.IdProtocolo}`}><img alt="Update" src={updateIcon} /></Link>  <button onClick={() => deletePrescription(prescriptionSuggested.IdProtocolo)}><img alt="Delete" src={deleteIcon} /></button> </td>
        </tr>
    );

}
export default PrescriptionSuggestedTableColumn;