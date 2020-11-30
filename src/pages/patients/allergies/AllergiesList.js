import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/pages/patients/allergy/allergy-list.css';
import AllergySearch from '../../../components/search/allergy/allergySearch';
import Sidebar from '../../../components/sidebar/Sidebar';
import ContainerForm from '../../../components/UI/container/containerForm';

export default function AllergyList() {
    const { id } = useParams();

    return (
        <div className="page-show-allergy">

            <main>
                <form className="show-allergy-form">
                    <fieldset>
                        <legend>Alergias</legend>
                        <AddButton text="Adicionar Alergia" route="cadastroAlergia" />
                        <AllergySearch id={id} />
                    </fieldset>
                </form>
            </main>
        </div>
    )
}