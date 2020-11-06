import React from 'react';

const PrescriptionSuggestedTableColumn = ({ prescriptionSuggested }) => {

    return (
        <tr>
            <td> <label htmlFor="protocolo_sigla">{prescriptionSuggested.Sigla} </label></td>
            <td htmlFor="protocolo_descricao">{prescriptionSuggested.Descricao}</td>
            <td htmlFor="protocolo_indicacao">{prescriptionSuggested.Indicacao}</td>
            {/* uptade at? ... ???*/}
        </tr>
    );

}
export default PrescriptionSuggestedTableColumn;