import React from 'react';
import Table from 'react-bootstrap/Table'
import UIContainer from '../../UI/Container';
import './tableMedicines.css';
import exclueIcon from '../../../images/close.png';

const TableMedicines = ({ presentations }) => (
    <UIContainer>
        <fieldset>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Medicamento</th>
                        <th>Posologia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paracetamol 700mg</td>
                        <td>2 vezes ao dia</td>
                        <td>
                            <a className="exclue-medicine">
                                <img className="exclue-icon" width="25px" height="25px" src={exclueIcon} />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Dorflex 20ml</td>
                        <td>Em caso de dor</td>
                        <td>
                            <a className="exclue-medicine">
                                <img className="exclue-icon" width="25px" height="25px" src={exclueIcon} />
                            </a>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default TableMedicines;