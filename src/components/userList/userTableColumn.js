import React from 'react';
import DeleteUser from '../../services/ServiceUsers/deleteUser';
import Buttons from '../editDelButton/EditDelButton';

const UserTableColumn = ({ user }) => {

    const deleteUser = async(id) => {
        await DeleteUser(id);
    }
    
    return (
        <tr>
            <td>{user.IdUsuario}</td>
            <td>{user.Nome}</td>
            <td>{user.CPF}</td>
            <td>{user.Admin}</td>
            <td>{user.Status}</td>
            <td><Buttons routeEdit={`/editarUsuario/${user.IdUsuario}`} delete={deleteUser(user.IdUsuario)}/></td>
        </tr>
    );

}
export default UserTableColumn;