import React from 'react';
import { useParams } from 'react-router-dom';
import AllergyRegistration from './AllergyRegistration';

const EditAllergy = () => {
    const { id } = useParams();
    console.log('tela teste alergias' + id);

    return (
        <AllergyRegistration id={id} />
    );
}

export default EditAllergy;
