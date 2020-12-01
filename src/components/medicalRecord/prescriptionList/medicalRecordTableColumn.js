import React from 'react';
import ColumnUpdateRemove from '../../tableComponents/columnUpdateRemove';
import Buttons from '../../editDelButton/EditDelButton';
import formattedDate from '../../../utils/formattedDate';

const MedicalRecordColumn = ( { prescription }) => {

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{formattedDate(prescription.Data)}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{formattedDate(prescription.DataAssinatura)}</td>            
            <td><Buttons routeEdit={`lala`} delete={`lala`}/></td>
            <ColumnUpdateRemove />
        </tr>
    )
}
export default MedicalRecordColumn;