import React from "react";
import { Table } from 'react-bootstrap';
import UIContainer from "../UI/Container";
import MedicineTableColumn from './medicineTableColumn';

const MedicineList = ({ medicines }) => (
    <UIContainer>  
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
    </UIContainer>
);

export default MedicineList;