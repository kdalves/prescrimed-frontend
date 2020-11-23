import React from 'react';
import DeletePrescription from '../../services/ServicePrescriptions/deletePrescription';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import { Link } from 'react-router-dom';

const PrescriptionSuggestedTableColumn = ({ prescriptionSuggested }) => {

    const deletePrescription = async(id) =>{
        await DeletePrescription(id);
    }

    return (
        <tr>
            <td> <label htmlFor="protocolo_sigla">{prescriptionSuggested.Sigla} </label></td>
            <td htmlFor="protocolo_descricao">{prescriptionSuggested.Descricao}</td>
            <td htmlFor="protocolo_indicacao">{prescriptionSuggested.Indicacao}</td>
            <td className="bank-actions">   
              <Link to={`/editarPrescricaoSugerida/${prescriptionSuggested.IdProtocolo}`}>
                <img src={updateIcon} />
              </Link>  
              <button onClick={() => deletePrescription(prescriptionSuggested.IdProtocolo)}>
                <img  src={deleteIcon} />
              </button> 
            </td>            
        </tr>
    );

}
export default PrescriptionSuggestedTableColumn;