import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import '../../styles/pages//users/users-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';

const initialValue = {
  "IdUsuario": 0,
  "CPF": "",
  "Nome": "",
  "Admin": 0,
  "Status": 0
}

export default function UserRegistration() {
  const { id } = useParams();

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event) { //recebe um evento e captura um nome e valor do input
    const { name, value } = event.target;

    // console.log({name, value})

    //jeito de js = values[name] = value

    //jeito react
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault(); //n aparecer dados no link
    //utilzar o axios para fazer um request

    api.post('/usuarios', values)
      .then((response) => {
        history.push('/listaUsuarios') 
      });
  }

  return (
    <div id="page-create-user">
      <Sidebar/>
      <main>
        <form className="create-user-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>Cadastro de Usuarios</legend>

            <div className="input-block">
              <label htmlFor="cpf">CPF</label>
              <input id="CPF" name="CPF" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="Nome" name="Nome" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="admin_status">Admin:</label>

              <div className="button-select">
                <button type="button" className="active" id="Admin" name="Admin">Sim</button>
                <button type="button" id="Admin" name="Admin">Não</button>
              </div>
            </div>
            <div className="input-block">
              <label htmlFor="user_status">Status</label>
              <input id="Status" name="Status" onChange={onChange} />
            </div>

          </fieldset>
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>

      </main>
    </div>
  );
}