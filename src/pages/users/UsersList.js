import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages/users/user-list.css';
import UserSearch from '../../components/search/user/userSearch';
import ContainerForm from "../../components/UI/container/containerForm";
import AddButton from '../../components/addButton/addButton';

export default function UsersList() {
    return (
        <div id="page-show-user">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-user-form">
                        <fieldset>
                            <legend>Usuários</legend>
                            <AddButton text="Adicionar Usuário " route="cadastroUsuarios" />
                            <UserSearch />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>  
        </div>
    );


}