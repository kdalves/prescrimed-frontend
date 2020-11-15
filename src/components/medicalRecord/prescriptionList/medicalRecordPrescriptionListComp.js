import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import MedicalRecordColumn from './medicalRecordTableColumn';

const MedicalRecordPrescriptionList = ( {prescriptions }) => (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Identificação</th>
                    <th>Data</th>
                    <th>Médico Prescritor</th>
                    <th>Médico Assinante</th>
                    <th>Data assinatura</th>
                    <th>Atualizar Remover </th>
                </tr>
            </thead>
            <tbody>
                {prescriptions.map((prescription) => (
                    <MedicalRecordColumn prescription={prescription} />
                ))}
            </tbody>
        </Table>
   
)
export default MedicalRecordPrescriptionList;

