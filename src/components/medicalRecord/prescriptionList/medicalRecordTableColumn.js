import React from 'react';
import ColumnUpdateRemove from '../../tableComponents/columnUpdateRemove';
const MedicalRecordColumn = ( { prescription }) => {

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{prescription.Data}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.DataAssinatura}</td>
            <ColumnUpdateRemove />
        </tr>
    )
}
export default MedicalRecordColumn;