import React, {useEffect, useState} from 'react'
import api from '../../../services/api';
// import GetIDPatients from '../../../services/ServicePatients/getIDPatient';
import MedicalRecordPrescriptionList from '../../medicalRecord/prescriptionList/medicalRecordPrescriptionListComp';

const MedicalRecordSearch = () => {

    const [prescriptions, setPrescriptions] = useState([]);
    // const [patients, setPatients] = useState([]);

    // console.log('pp');
    // console.log(patients);
    useEffect(() => {
        const params = {};
    
        api.get('/prescricao', { params })
           .then( (response) => {
             setPrescriptions(response.data);
           });

        // const getPatients = async ( id ) => {
        //     const response = await GetIDPatients(id);
        //     // console.log('prescription');
        //     // console.log(prescription);
        //     // console.log(response);
        //     setPatients(response[0]);    
        // };

        // getPatients(prescriptions);
    }, []);

    return(
        <div>
            <MedicalRecordPrescriptionList prescriptions={prescriptions} />
        </div>
    )
}

export default MedicalRecordSearch;