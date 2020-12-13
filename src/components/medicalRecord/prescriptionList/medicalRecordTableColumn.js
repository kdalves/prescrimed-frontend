import React, { useState, useEffect } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import ColumnUpdateRemove from '../../tableComponents/columnUpdateRemove';
import Buttons from '../../editDelButton/EditDelButton';
import formattedDate from '../../../utils/formattedDate';
// import getNameProfissional from '../../../utils/getNameProfissional';
import pdfIcon from '../../../images/pdf.png';
// import deleteIcon from '../../../images/close.png';
// import updateIcon from '../../../images/edit-notebook.png';
import { Impressao } from '../../../pages/pdf/Impressao';
import { data } from '../../../pages/pdf/data';
import { paciente } from '../../../pages/pdf/paciente';
// import GetIDPatients from '../../../services/ServicePatients/getIDPatient'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const MedicalRecordColumn = ( { prescription, patients }) => {   
const MedicalRecordColumn = ( { prescription }) => {   
    // console.log('pp');
    // console.log(prescription);
    // console.log('bosta');
    // console.log(patients);

    // const [patients, setPatients] = useState([]);

    // useEffect(() => {
    //     const getPatients = async ( id ) => {
    //         const response = await GetIDPatients(id);
    //         console.log('prescription');
    //         // console.log(prescription);
    //         console.log(response);
    //         setPatients(response[0]);    
    //     };

    //     getPatients(prescription.IdPaciente);

    // }, []);  
    

    const visualizarImpressao = async () => {
        const classeImpressao = new Impressao(data, paciente);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }

    return(
        <tr>
            <td>{prescription.Identificacao}</td>
            <td>{formattedDate(prescription.Data)}</td>
            {/* <td>{getNameProfissional(prescription.IdProfissional)}</td> */}
            <td>{prescription.IdProfissional}</td>
            <td>{prescription.IdProfissional}</td>
            <td>{formattedDate(prescription.DataAssinatura)}</td>
            <td><button type='button' onClick={visualizarImpressao} style={{ border: 0, background: 0 }}><img alt="pdf" src={pdfIcon} width="25px" /></button></td>
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