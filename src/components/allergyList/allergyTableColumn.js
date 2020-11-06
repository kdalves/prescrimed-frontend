import React from 'react';

const AllergyTableColumn = ({ allergy }) => {
    return(
        <tr>
            <td>{allergy.Descricao}</td>
        </tr>
    );
}
export default AllergyTableColumn;