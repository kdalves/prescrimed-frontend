import React from 'react';
const MedicalRecordColumn = ( { prescription }) => {

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{prescription.Data}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.DataAssinatura}</td>
            <td> </td>
        </tr>
    )
}
export default MedicalRecordColumn;