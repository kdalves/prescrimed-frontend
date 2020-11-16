import React, { useEffect, useState } from "react";
//import '../../../styles/pages/medics/medic-registration.css';
import PrescriptionDetailsList from '../../prescriptionDetailsList/prescriptionDetailsListComp';

import api from '../../../services/api';

const PrescriptionDetailsSearch = () =>{
    const[details, setDetails] = useState([]);

    useEffect(() => {
       const params = {};

       api.get('/prescricaoDetalhes', {params})
        .then((response) => {
            setDetails(response.data);
        });
    });

    return(
        <div>
            <PrescriptionDetailsList />
        </div>
    )
}

export default PrescriptionDetailsSearch;
