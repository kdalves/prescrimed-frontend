import React from "react";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import PatientTableColumn from "./patientTableColumn";

const PatientList = ({ patients }) => (
    <UIContainer>  
        <fieldset>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nome Social</th>
                        <th>CPF</th>
                        <th>Sexo</th>
                        <th>Nascimento</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <PatientTableColumn patient={patient} />
                    ))}
                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default PatientList;