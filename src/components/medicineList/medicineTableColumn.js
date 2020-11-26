import React from 'react';
import Buttons from '../editDelButton/EditDelButton';

const MedicineTableColumn = ({ medicine }) => {
    return(
        <tr>
            <td>{medicine.Descricao}</td>
            <td>{medicine.Tipo}</td>
            <td><Buttons routeEdit={`lala`} delete={`lala`}/></td>
        </tr>
    );
}
export default MedicineTableColumn;