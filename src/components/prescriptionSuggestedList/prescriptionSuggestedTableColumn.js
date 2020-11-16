import React from 'react';
import UpdateDelete from '../tableComponents/columnUpdateRemove';
const PrescriptionSuggestedTableColumn = ({ prescriptionSuggested }) => {

    return (
        <tr>
            <td> <label htmlFor="protocolo_sigla">{prescriptionSuggested.Sigla} </label></td>
            <td htmlFor="protocolo_descricao">{prescriptionSuggested.Descricao}</td>
            <td htmlFor="protocolo_indicacao">{prescriptionSuggested.Indicacao}</td>
            <UpdateDelete />
        </tr>
    );

}
export default PrescriptionSuggestedTableColumn;