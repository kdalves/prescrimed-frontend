// import React from 'react';
import api from '../services/api';

const getNameProfissional = async (idProfissional) => {
    try {
        // const { data } = await api.get(`/profissionais/${idProfissional}`);
        const teste = await api.get(`/profissionais/${idProfissional}`);
        // const name = (info.data[0].Nome);
        // const json = await response.json();


            //     const response = await GetIDPatients(id);
            //     console.log('loadPatients: ', response[0]);
            //     setPatients(response[0]);
            // }
    
            // loadPatients(id);

        // console.log(data.Nome);
        // debugger;

        // console.log(teste);
        // debugger;

        // this.setState({ data: json });
        // teste
    } catch (error) {
        console.log(error);
    }   
}

export default getNameProfissional;