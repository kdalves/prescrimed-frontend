import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../../../styles/pages/users/users-registration.css';
import PrescriptionSuggestedList from '../../prescriptionSuggestedList/PrescriptionSuggestedListComp';

const PrescriptionSuggestedSearch = () => {
    const [prescriptionsSuggested, setPrescriptionSuggested] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {};
        axios.get('http://localhost:3333/protocolos', { params })
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