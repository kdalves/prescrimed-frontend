import React from 'react';
import { useParams } from 'react-router-dom';
import PatientRegistration from './PatientRegistration';

const EditPatient = () => {
    const { id } = useParams();
    console.log('tela teste pacientes' + id);

    return (
        <PatientRegistration id={id} />
    );
}

export default EditPatient;