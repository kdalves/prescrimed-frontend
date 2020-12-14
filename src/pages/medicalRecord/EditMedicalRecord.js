import React from 'react';
import { useParams } from 'react-router-dom';
import MedicalRecord from './MedicalRecord';

const EditMedicalRecord = () => {
    const { id } = useParams();
    console.log('tela edit medical record ' + id);

    return (
        <MedicalRecord id={id} />
    );
}

export default EditMedicalRecord;