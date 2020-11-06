import React from "react";
import { Table } from 'react-bootstrap'
import UserTableColumn from './userTableColumn';
import UIContainer from '../UI/Container';


const UserList = ({ users }) => (
  <UIContainer>
    <fieldset>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Admin</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableColumn user={user} />
          ))}
        </tbody>
      </Table>
    </fieldset>
  </UIContainer>


);

export default UserList;
