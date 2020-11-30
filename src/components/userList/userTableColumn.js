import React from 'react';
import DeleteUser from '../../services/ServiceUsers/deleteUser';
import Buttons from '../editDelButton/EditDelButton';
import deleteIcon from '../../images/deleteColor.png';
import updateIcon from '../../images/refreshColor.png';
import { Link } from 'react-router-dom';

const UserTableColumn = ({ user }) => {

    const deleteUser = async (id) => {
        await DeleteUser(id);
    }

    return (
        <tr>
            <td>{user.IdUsuario}</td>
            <td>{user.Nome}</td>
            <td>{user.CPF}</td>
            <td>{user.Admin}</td>
            <td>{user.Status}</td>
            {/* <td><Buttons routeEdit={`/editarUsuario/${user.IdUsuario}`} delete={deleteUser(user.IdUsuario)}/></td> */}
            <td className="bank-actions">   <Link to={`/editarUsuario/${user.IdUsuario}`}><img alt="Update" src={updateIcon} /></Link>  <button onClick={() => deleteUser(user.IdUsuario)}><img alt="Delete" src={deleteIcon} /></button> </td>
        </tr>
    );

}
export default UserTableColumn;