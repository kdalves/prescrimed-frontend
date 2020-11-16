import React from 'react';

const PrescriptionDetailsTableColumn = ({ details }) => {
    return(
        <tr>
            <td>{details.Nome}</td>  {/*VER QUAL O CERTO */}
            <td>{details.Dose}</td>
            <td>{details.MedidaDose}</td>
            <td>{details.posologia}</td>
        </tr>
    );
}
export default PrescriptionDetailsTableColumn;