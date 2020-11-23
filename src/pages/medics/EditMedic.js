import React from 'react';
import {useParams} from 'react-router-dom';
import MedicRegistration from './MedicRegistrationNew';

const EditMedic = () => {
    const { id } = useParams();
    console.log('tela teste medicos' + id);

    return(
        <MedicRegistration id={id}/>
    );
}

export default EditMedic;