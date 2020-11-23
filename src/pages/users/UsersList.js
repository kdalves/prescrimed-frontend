import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages/users/user-list.css';
import UserSearch from '../../components/search/user/userSearch';
import {Link} from 'react-router-dom';
import ContainerForm from "../../components/UI/container/containerForm";

export default function UsersList() {
    return (
        <div id="page-show-user">
            <Sidebar />
            <ContainerForm>
                <main>
                    <form className="show-user-form">
                        <fieldset>
                            <legend>Usuários</legend>
                            <Link to="/cadastroUsuarios">Adicionar Usuário</Link>
                            <UserSearch />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>  
        </div>
    );


}