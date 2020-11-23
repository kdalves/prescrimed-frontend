import React from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import DeleteUser from '../../services/ServiceUsers/deleteUser';

const UserTableColumn = ({ user }) => {

    const deleteUser = async(id) => {
        await DeleteUser(id);
    }
    
    return (
        <tr>
            <td>{user.IdUsuario}</td>
            <td>{user.Nome}</td>
            <td> {user.CPF}</td>
            <td> {user.Admin}</td>
            <td> {user.Status}</td>
            <td className="bank-actions">   <Link to={`/editarUsuario/${user.IdUsuario}`}><img src={updateIcon} /></Link>  <button onClick={() => deleteUser(user.IdUsuario)}><img  src={deleteIcon} /></button> </td>

        </tr>
    );

}
export default UserTableColumn;