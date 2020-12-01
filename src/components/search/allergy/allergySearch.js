import React, { useEffect, useState } from "react";
import '../../../styles/pages/medics/medic-registration.css';
import AllergyList from '../../allergyList/AllergyListComp';
import api from '../../../services/api';
import GetAllergies from '../../../services/ServiceAllergy/getAllergies';


const AllergySearch = () => {

    const [allergies, setAllergies] = useState([]);

    const [search, setSearch] = useState("");

    const getAllergies = async (valor) => {
        const response = await GetAllergies(valor);
        console.log('getAllergies alergy search:', response);
        setAllergies(response.data);
    }

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }
        // api.get('/alergias', { params })
        //     .then((response) => {
        //         setAllergies(response.data);
        //     });
        getAllergies();

    }, [search]);

    return (
        <div>
            <AllergyList allergies={allergies} />
        </div>
    )
}

export default AllergySearch;