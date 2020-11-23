import React, { useEffect, useState } from "react";
import '../../../styles/pages/users/users-registration.css';
import PrescriptionSuggestedList from '../../prescriptionSuggestedList/PrescriptionSuggestedListComp';
import api from '../../../services/api';
import GetPrescription from '../../../services/ServicePrescriptions/getPrescriptions';

const PrescriptionSuggestedSearch = () => {
    const [prescriptionsSuggested, setPrescriptionSuggested] = useState([]);

    const [search, setSearch] = useState("");

    const getPrescription = async (value) =>{
        const response = await GetPrescription(value);
        setPrescriptionSuggested(response.data);
    }

    useEffect(() => {
        const params = {};
        // api.get('/protocolos', { params })
        //     .then((response) => {
        //         setPrescriptionSuggested(response.data);
        //     });
        getPrescription();

    }, [search]);

    return (
        <div>
            <PrescriptionSuggestedList prescriptionsSuggested={prescriptionsSuggested} />
        </div>
    )
}

export default PrescriptionSuggestedSearch;