import React, { useEffect, useState } from "react";
import '../../../styles/pages/medics/medic-registration.css';
import MedicineList from '../../medicineList/MedicineListComp'
//import '../search/allergySearch.css';
import api from '../../../services/api';


const MedicineSearch = () => {

    const [medicines, setMedicines] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        //mudança
        const params = {};
        if (search) {
            params.Nome_like = search;  
        }
       
        api.get('/medicamentos', { params }) 
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