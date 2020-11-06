import React from "react";
import { Table } from 'react-bootstrap'
import AllergyTableColumn from './allergyTableColumn';

const AllergyList = ({ allergies }) => (

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Alergia</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {/* {allergies.map((allergy) => (
                <AllergyTableColumn allergy={allergy} />
            ))} */}
        </tbody>
    </Table>
);

export default AllergyList;