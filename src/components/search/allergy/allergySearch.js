import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../../../styles/pages/medics/medic-registration.css'; 
import AllergyList from '../../allergyList/AllergyListComp';
//import '../search/allergySearch.css';


const AllergySearch = () => {

    const [users, setAllergies] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        //mudança
        const params = {};
        if (search) {
            params.Nome_like = search;  
        }
       
        axios.get('http://localhost:3333/alergias', { params }) 
            .then((response) => {
                setAllergies(response.data);
            });

    }, [search]); 

    return (
        <div>
            <AllergyList /> {/*allergies={allergies} */}
        </div>
    )
}

export default AllergySearch;