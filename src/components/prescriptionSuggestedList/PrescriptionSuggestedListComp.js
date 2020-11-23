import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import PrescriptionSuggestedTableColumn from "./prescriptionSuggestedTableColumn";

const PrescriptonSuggestedList = ({ prescriptionsSuggested }) => (
    <UIContainer>  
        <fieldset>
            <Link to="/cadastroPrescricaoSugerida">Adicionar Modelo de Prescrição</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Descrição</th>
                        <th>Indicação</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                   {prescriptionsSuggested.map(( prescriptionSuggested) => (
                        <PrescriptionSuggestedTableColumn  prescriptionSuggested={prescriptionSuggested} />
                    ))}
                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default PrescriptonSuggestedList;