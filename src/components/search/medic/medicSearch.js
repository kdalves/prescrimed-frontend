import React, {useEffect, useState} from "react";
import '../../../styles/pages/users/users-registration.css';
import MedicList from '../../medicList/MedicListComp';
import api from '../../../services/api';

const MedicSearch = () =>{
    const [medics, setMedics] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        //mudança
        const params = {};
        if(search){
            params.Nome_like = search; 
        }
      api.get('/profissionais', { params }) 
      .then( (response) => {
        setMedics(response.data);
      });
  
    }, [search]); 

    return(
        <div>  
            <MedicList medics={medics}/>
        </div>
    )
}

export default MedicSearch;