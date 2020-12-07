import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import GetIDPatients from '../../services/ServicePatients/getIDPatient';

const initialValue = {

}

const MedicalRecordPatientList = ({ id }) => {

    const [patient, setPatients] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        // const loadPatients = async (id) => {
        //     const response = await GetIDPatients(id);
        //     console.log('loadPatients: ', response[0]);
        //     setPatients(response[0]);
        // }

        // loadPatients(id);

    }, []);

    return (
        <fieldset>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>{patient.Nome}</th> */}
                        <th>Joãozinho</th>
                        <th>Peso(kg)</th>
                        <th>Altura(cm)</th>
                        <th>Superfície Corporal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td htmlFor="sexo_paciente">{patient.Sexo}Masculino</td>
                        <td htmlFor="peso">{patient.Peso} 70kg</td>
                        <td htmlFor="altura">{patient.Altura} 1.70</td>
                        <td htmlFor="superficie">{patient.Superficie} 200</td>
                    </tr>
                </tbody>
            </Table>
        </fieldset>
    )
}

export default MedicalRecordPatientList;