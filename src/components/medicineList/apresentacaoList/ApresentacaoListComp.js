import React from 'react';
import Table from 'react-bootstrap/Table'
import UIContainer from '../../UI/Container';
import ApresentacaoTableColumn from './apresentacaoTableColumn';

const ApresentacaoList = ({ presentations }) => (
    <UIContainer>
        <fieldset>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th>Dose</th>
                        <th>Unidade de Medida</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {presentations.map((presentation) => (
                        <ApresentacaoTableColumn presentation={presentation} />
                    ))}
                </tbody>
            </Table>
        </fieldset>
    </UIContainer>
);
export default ApresentacaoList;