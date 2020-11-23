import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import '../../styles/pages//users/users-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import PostUsers from '../../services/ServiceUsers/postUsers';
import PutUser from '../../services/ServiceUsers/putUser';
import GetIDUser from '../../services/ServiceUsers/getIDUser';

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

  const postUser = async(value) => {
    const response = await PostUsers(value);
    console.log(response);
  }

  const putUser = async (id ,value) => {
    const response = await PutUser(id ,value)
    console.log(response);
  } 

  useEffect(() =>{

    const loadUser = async (id) => {
      const response = await GetIDUser(id);
      setValues(response[0]);
    }
    loadUser(id);

  }, []);

  function onChange(event) { //recebe um evento e captura um nome e valor do input
    const { name, value } = event.target;

    // console.log({name, value})

    //jeito de js = values[name] = value

    //jeito react
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault(); //n aparecer dados no link
    
    try{

      if(id){
        putUser(id, values);
        history.push('/listaUsuarios');
      }else{
        postUser(values);
        history.push('/listaUsuarios');
      } 
    }catch(error){
      console.log('Houve algum problema', error);
    }


    // api.post('/usuarios', values)
    //   .then((response) => {
    //     history.push('/listaUsuarios') 
    //   });
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