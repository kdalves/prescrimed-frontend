import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../../../styles/pages/medics/medic-registration.css';
import MedicineList from '../../medicineList/MedicineListComp'
//import '../search/allergySearch.css';


const MedicineSearch = () => {

    const [users, setMedicines] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        //mudança
        const params = {};
        if (search) {
            params.Nome_like = search;  
        }
       
        axios.get('http://localhost:3333/medicamentos', { params }) 
            .then((response) => {
                setMedicines(response.data);
            });

    }, [search]); 

    return (
        <div>
            <MedicineList /> {/*medicines={medicines} */}
        </div>
    )
}

export default MedicineSearch;