import React, { useEffect, useState } from "react";
import '../../../styles/pages/users/users-registration.css';
import UserList from '../../userList/UserListComp';
import '../user/userSearch.css';
import api from '../../../services/api';
import GetUsers from '../../../services/ServiceUsers/getUsers';

const UserSearch = ({ id }) => {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState("");

    const getUsers = async (value) => {
        const response = await GetUsers(value);
        setUsers(response.data);
    }

    useEffect(() => {
        const params = {};
        if (search) {
            params.Nome_like = search;
        }
        // api.get('/usuarios', { params })
        //     .then((response) => {
        //         setUsers(response.data);
        //     });

        getUsers();

    }, [search]);

    return (
        <div>
            <UserList users={users} />
        </div>
    )
}

export default UserSearch;

