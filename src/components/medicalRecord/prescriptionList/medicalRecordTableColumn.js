import React from 'react';
import ColumnUpdateRemove from '../../tableComponents/columnUpdateRemove';
import Buttons from '../../editDelButton/EditDelButton';
import formattedDate from '../../../utils/formattedDate';
import { Link } from 'react-router-dom';
import pdfIcon from '../../../images/pdf.png';
// import deleteIcon from '../../../images/close.png';
// import updateIcon from '../../../images/edit-notebook.png';

const MedicalRecordColumn = ( { prescription }) => {

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{formattedDate(prescription.Data)}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{formattedDate(prescription.DataAssinatura)}</td>
            <td><Link to={`lala`}><img src={pdfIcon} width="25px" /></Link></td>
            <td>
                {/* <Link to={`lala`}><img src={updateIcon} width="25px" /></Link>
                <button style={{ border: 0, background: 0 }}><img  src={deleteIcon}  width="20px" /></button> */}
                <Buttons routeEdit={`lala`} delete={`lala`}/>
            </td>
            <ColumnUpdateRemove />
        </tr>
    )
}
export default MedicalRecordColumn;