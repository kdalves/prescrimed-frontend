import React from "react";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import PrescriptionSuggestedTableColumn from "./prescriptionSuggestedTableColumn";

const PrescriptonSuggestedList = ({ prescriptionsSuggested }) => (
    <UIContainer>  
        <fieldset>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sigla</th>
                        <th>Descrição</th>
                        <th>Indicação</th>
                        <th>Editar | Remover</th>
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