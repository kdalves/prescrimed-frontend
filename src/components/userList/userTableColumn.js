import React from 'react';

const UserTableColumn = ({ user }) => {
    return (
        <tr>
            <td>{user.IdUsuario}</td>
            <td>{user.Nome}</td>
            <td> {user.CPF}</td>
            <td> {user.Admin}</td>
            <td> {user.Status}</td>
        </tr>
    );

}
export default UserTableColumn;