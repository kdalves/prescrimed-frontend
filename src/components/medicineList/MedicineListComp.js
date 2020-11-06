import React from "react";
import { Table } from 'react-bootstrap'
import MedicineTableColumn from './medicineTableColumn';

const MedicineList = ({ medicines }) => (

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Tipo</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {/* {medicines.map((medicine) => (
                <AllergyTableColumn allergy={allergy} />
            ))} */}
        </tbody>
    </Table>
);

export default MedicineList;