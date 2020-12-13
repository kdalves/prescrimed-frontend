import React, {useEffect, useState} from 'react'
import api from '../../../services/api';
import MedicalRecordPrescriptionList from '../../medicalRecord/prescriptionList/medicalRecordPrescriptionListComp';

const MedicalRecordSearch = () => {

    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const params = {};
    
    api.get('/prescricao', { params })
        .then( (response) => {
            setPrescriptions(response.data);
        });
    });

    return(
        <div>
            <MedicalRecordPrescriptionList prescriptions={prescriptions} />
        </div>
    )
}

export default MedicalRecordSearch;