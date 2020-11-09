import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const MedicalRecordPatientList = () => {

    const [patient, setPatients] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {};
        if(search){
            params.Nome_like = search; 
        }
                                               
      axios.get('http://localhost:3333/pacientes', { params })  
      .then( (response) => {
        setPatients(response.data);
      });
  
    }, [search]);

    return(
        <fieldset>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{patient.Nome}</th>
                    <th>Peso(kg)</th>
                    <th>Altura(cm)</th>
                    <th>Superfície Corporal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td htmlFor="sexo_paciente">{patient.Sexo}</td>
                    <td htmlFor="peso">{patient.Peso}</td>
                    <td htmlFor="altura">{patient.Altura}</td>
                    <td htmlFor="superficie">{patient.Superficie}</td>
                </tr>
            </tbody>
        </Table>
        <p>Identificação da Prescrição: </p>
    </fieldset>
    )
   
}

export default MedicalRecordPatientList;