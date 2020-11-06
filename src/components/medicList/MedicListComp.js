import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import MedicTableColumn from "./medicTableColumn";

const MedicList = ({ medics }) => (
    <UIContainer>  
        <fieldset>
            <Link to="/cadastroMedicos">Adicionar Médico</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Especialidade</th>
                        <th>CPF</th>
                        <th>CRM</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {medics.map((medic) => (
                        <MedicTableColumn medic={medic} />
                    ))}
                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default MedicList;

