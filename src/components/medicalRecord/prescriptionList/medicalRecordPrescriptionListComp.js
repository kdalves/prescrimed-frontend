import React from 'react';
import { Table } from 'react-bootstrap';
import MedicalRecordColumn from './medicalRecordTableColumn';

// const MedicalRecordPrescriptionList = ( {prescriptions, patients }) => (
const MedicalRecordPrescriptionList = ( {prescriptions }) => (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Identificação</th>
                    <th>Data</th>
                    <th>Médico Prescritor</th>
                    <th>Médico Assinante</th>
                    <th>Data Assinatura</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {prescriptions.map((prescription) => (
                    // <MedicalRecordColumn prescription={prescription}  patients={patients} />
                    <MedicalRecordColumn prescription={prescription}/>
                ))}
            </tbody>
        </Table>
   
)
export default MedicalRecordPrescriptionList;

