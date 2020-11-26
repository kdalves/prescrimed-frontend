import React from 'react';
import ColumnUpdateRemove from '../../tableComponents/columnUpdateRemove';
import Buttons from '../../editDelButton/EditDelButton';

const MedicalRecordColumn = ( { prescription }) => {

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{prescription.Data}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.DataAssinatura}</td>            
            <td><Buttons routeEdit={`lala`} delete={`lala`}/></td>
            <ColumnUpdateRemove />
        </tr>
    )
}
export default MedicalRecordColumn;