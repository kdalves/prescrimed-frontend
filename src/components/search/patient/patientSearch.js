import React, { useEffect, useState } from "react";
import '../../../styles/pages/users/users-registration.css';
import PatientList from '../../patientList/PatientListComp';
import api from '../../../services/api';
import GetPatients from '../../../services/ServicePatients/getPatients';

const PatientSearch = () => {
    const [patients, setPatients] = useState([]);

    const [search, setSearch] = useState("");

    const getPatients = async (valor) => {
        const response = await GetPatients(valor);
        setPatients(response.data);
    }

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }

        // api.get('/pacientes', { params })
        //     .then((response) => {
        //         setPatients(response.data);
        //     });
        getPatients();

    }, [search]);

    return (
        <div>
            <PatientList patients={patients} />
        </div>
    )
}

export default PatientSearch;