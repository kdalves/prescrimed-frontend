import React from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import '../../styles/pages/users/user-list.css';
import UserSearch from '../../components/search/user/userSearch';
import { Link, useParams } from 'react-router-dom';
import ContainerForm from "../../components/UI/container/containerForm";

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
                            <Link to="/cadastroUsuarios">Adicionar Usuário</Link>
                            <UserSearch id={id} />
                        </fieldset>
                    </form>
                </main>
            </ContainerForm>
        </div>
    );


}