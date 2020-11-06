import React from 'react';

const MedicineTableColumn = ({ medicine }) => {
    return(
        <tr>
            <td>{medicine.Descricao}</td>
            <td>{medicine.Tipo}</td>
        </tr>
    );
}
export default MedicineTableColumn;