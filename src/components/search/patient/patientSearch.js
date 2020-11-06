import React, {useEffect, useState} from "react";
import axios from 'axios'
import '../../../styles/pages/users/users-registration.css';
import PatientList from '../../patientList/PatientListComp';

const PatientSearch = () =>{
    const [patients, setPatients] = useState([]);

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
        <div>
            <PatientList patients={patients}/>
        </div>
    )
}

export default PatientSearch;