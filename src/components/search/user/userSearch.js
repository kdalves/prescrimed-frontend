import React, { useEffect, useState } from "react";
import axios from 'axios'
import '../../../styles/pages/users/users-registration.css';
import UserList from '../../userList/UserListComp';
import '../user/userSearch.css';

const UserSearch = () => {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }
        axios.get('http://localhost:3333/usuarios', { params })
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

