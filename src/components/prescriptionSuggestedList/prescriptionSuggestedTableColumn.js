import React from 'react';
import DeletePrescription from '../../services/ServicePrescriptions/deletePrescription';
import Buttons from '../editDelButton/EditDelButton';

const PrescriptionSuggestedTableColumn = ({ prescriptionSuggested }) => {

    const deletePrescription = async(id) =>{
        await DeletePrescription(id);
    }

    return (
        <tr>
            <td> <label htmlFor="protocolo_sigla">{prescriptionSuggested.Sigla} </label></td>
            <td htmlFor="protocolo_descricao">{prescriptionSuggested.Descricao}</td>
            <td htmlFor="protocolo_indicacao">{prescriptionSuggested.Indicacao}</td>            
            <td><Buttons routeEdit={`/editarPrescricaoSugerida/${prescriptionSuggested.IdProtocolo}`} delete={deletePrescription(prescriptionSuggested.IdProtocolo)}/></td>          
        </tr>
    );

}
export default PrescriptionSuggestedTableColumn;