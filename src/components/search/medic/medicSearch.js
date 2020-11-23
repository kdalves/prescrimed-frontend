import React, {useEffect, useState} from "react";
import '../../../styles/pages/users/users-registration.css';
import MedicList from '../../medicList/MedicListComp';
import GetProfissionais from "../../../services/ServiceProfissionais/getProfissionais";

const MedicSearch = ({ id }) =>{  //NAO TINHA ESSE ID
    const [medics, setMedics] = useState([]);

    const [search, setSearch] = useState("");

    const getProfissionais = async (valor) => {
        const response = await GetProfissionais(valor);
        setMedics(response.data);
    }

    useEffect(() => {
        const params = {};
        if(search){
            params.Nome_like = search; 
        }

    //   api.get('/profissionais', { params }) 
    //   .then( (response) => {
    //     setMedics(response.data);
    //   });
    
    getProfissionais(); // !!! ver se precisa de algum valor aqui !!!
     
    }, [search]); 

    return(
        <div>  
            <MedicList medics={medics}/>
        </div>
    )
}

export default MedicSearch;