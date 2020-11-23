import React from "react";
import { Link } from "react-router-dom";
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
                        <th>CRM</th>
                        <th>Atualizar Remover </th>
                    </tr>
                </thead>
                <tbody>
                    {medics.map((medic) => (
                        <MedicTableColumn medic={medic}
                            onClickDelete={() => console.log('Médico DELETED' + medic.IdProfissional + medic.Nome)} />
                    ))}
                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default MedicList;

