import React, { useEffect, useState } from "react";
import '../../../styles/pages/users/users-registration.css';
import PrescriptionSuggestedList from '../../prescriptionSuggestedList/PrescriptionSuggestedListComp';
import api from '../../../services/api';

const PrescriptionSuggestedSearch = () => {
    const [prescriptionsSuggested, setPrescriptionSuggested] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {};
        api.get('/protocolos', { params })
            .then((response) => {
                setPrescriptionSuggested(response.data);
            });

    }, [search]);

    return (
        <div>

            <PrescriptionSuggestedList prescriptionsSuggested={prescriptionsSuggested} />

        </div>
    )
}

export default PrescriptionSuggestedSearch;