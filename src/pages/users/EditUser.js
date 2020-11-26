import React from 'react';
import { useParams } from 'react-router-dom';
import UserRegistration from './UsersRegistration';

const EditUser = () => {
    const { id } = useParams();
    console.log('tela teste User' + id);

    return (
        <UserRegistration id={id} />
    );
}

export default EditUser;