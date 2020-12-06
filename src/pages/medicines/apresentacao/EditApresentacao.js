import React from 'react';
import { useParams } from 'react-router-dom';
import ApresentacaoRegistration from './ApresentacaoRegistration';

const EditApresentacao = () => {
    const { id } = useParams();
    console.log('tela teste apresentacao' + id);

    return (
        <ApresentacaoRegistration id={id} />
    );
}

export default EditApresentacao;