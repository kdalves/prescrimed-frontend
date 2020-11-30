import React from 'react';
import { Link } from 'react-router-dom';
import DeleteAllergy from '../../services/ServiceAllergy/deleteAllergy';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';

const AllergyTableColumn = ({ allergy }) => {

    const deleteAllergy = async (id) => {
        await DeleteAllergy(id)
    }
    return (
        <tr>
            <td>{allergy.Alergia}</td>
            <td className="bank-actions"><Link to={`/editarAlergia/${allergy.IdPaciente}`}><img src={updateIcon} /></Link></td>
            <td className="bank-actions"><button onClick={() => deleteAllergy(allergy.IdPaciente)}><img src={deleteIcon} /></button> </td>
        </tr>
    );
}
export default AllergyTableColumn;