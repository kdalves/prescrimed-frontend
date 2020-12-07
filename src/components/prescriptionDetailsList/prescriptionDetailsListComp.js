import React from "react";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import PrescriptionDetailsTableColumn from './prescriptionDetailsTableColumn';
import AddButton from '../../components/addButton/addButton';

const PrescriptionDetailsList = ({ prescriptionDetails }) => (
    <>
        <div className="plus-content">
            <AddButton text="Adicionar Medicamentos " route="cadastroProntuario" />
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Medicamento</th>
                    <th>Dosagem</th>
                    <th>Unidade de Medida </th>
                    <th>Posologia</th>
                </tr>
            </thead>
            <tbody>
                {/* {prescriptionDetails.map((details) => (
                    <PrescriptionDetailsTableColumn prescriptionDetail={prescriptionDetails} />
                ))} */}
            </tbody>
        </Table>
    </>
);

export default PrescriptionDetailsList;
