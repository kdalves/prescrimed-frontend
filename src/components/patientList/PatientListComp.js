import React from "react";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import PatientTableColumn from "./patientTableColumn";

const PatientList = ({ patients }) => (
    <UIContainer>  
        <fieldset>
            <Link to="/listaPacientes">Adicionar Paciente</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nome Social</th>
                        <th>CPF</th>
                        <th>Sexo</th>
                        <th>Nascimento</th>
                        <th>Editar</th>
                        <th>Remover</th>
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