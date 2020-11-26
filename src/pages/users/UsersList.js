import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages/users/user-list.css';
import UserSearch from '../../components/search/user/userSearch';
import { useParams } from 'react-router-dom';
import ContainerForm from "../../components/UI/container/containerForm";
import AddButton from '../../components/addButton/addButton';

export default function UsersList() {
    const { id } = useParams();
    return (
        <div id="page-show-user">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-user-form">
                        <fieldset>
                            <legend>Usuários</legend>
                            <AddButton text="Adicionar Usuário " route="cadastroUsuarios" />
                            <UserSearch id={id} />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>
        </div>
    );


}