import React, { useEffect, useState } from "react";
import '../../../../styles/pages/medicines/apresentacao/apresentacao-registration.css';
import ApresentacaoList from '../../../medicineList/apresentacaoList/ApresentacaoListComp';
import GetPresentation from '../../../../services/ServiceMedicinePresentation/getMedicinePresentations';

const ApresentacaoSearch = () => {
    const [presentations, setPresentations] = useState([]);

    const [search, setSearch] = useState("");

    const getPresentation = async (valor) => {
        const response = await GetPresentation(valor);
        setPresentations(response.data);
    }

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }

        getPresentation();

    }, [search]);

    return (
        <div>
            <ApresentacaoList presentations={presentations} />
        </div>
    )
}

export default ApresentacaoSearch;