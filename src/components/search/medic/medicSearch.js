import React, {useEffect, useState} from "react";
import axios from 'axios'
import '../../../styles/pages/users/users-registration.css';
import MedicList from '../../medicList/MedicListComp';

const MedicSearch = () =>{
    const [medics, setMedics] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        //mudança
        const params = {};
        if(search){
            params.Nome_like = search; 
        }
      axios.get('http://localhost:3333/profissionais', { params }) 
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