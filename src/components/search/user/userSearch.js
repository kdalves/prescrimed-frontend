import React, { useEffect, useState } from "react";
import '../../../styles/pages/users/users-registration.css';
import UserList from '../../userList/UserListComp';
import '../user/userSearch.css';
import api from '../../../services/api';

const UserSearch = () => {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }
        api.get('/usuarios', { params })
            .then((response) => {
                setUsers(response.data);
            });

    }, [search]); // [] mudei para [search] sempre que valor de search mudar, ele vai executar o useEffect

    return (
        <div>
            <UserList users={users}/>
        </div>
    )
}

export default UserSearch;

