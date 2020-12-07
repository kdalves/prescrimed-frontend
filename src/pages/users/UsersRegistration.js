import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import '../../styles/pages//users/users-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import PostUsers from '../../services/ServiceUsers/postUsers';
import PutUser from '../../services/ServiceUsers/putUser';
import GetIDUser from '../../services/ServiceUsers/getIDUser';
import ContainerForm from "../../components/UI/container/containerForm";

const initialValue = {
  "IdUsuario": 0,
  "CPF": "",
  "Nome": "",
  "Admin": 0,
  "Status": 0
}

export default function UserRegistration({ id }) {

  const [values, setValues] = useState(initialValue);
  const history = useHistory();
  const { goBack } = useHistory();

  console.log('values:', values);

  const postUser = async (value) => {
    const response = await PostUsers(value);
    console.log(response);
  }

  const putUser = async (id, value) => {
    const response = await PutUser(id, value)
    console.log(response);
  }

  useEffect(() => {

    const loadUser = async (id) => {
      const response = await GetIDUser(id);
      console.log('loadUser', response);
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

  function onChangeStatus(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onChangeAdmin(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault(); //n aparecer dados no link

    try {

      if (id) {
        putUser(id, values)
          .then((response) => history.push('/listaUsuarios'));

      } else {
        postUser(values)
          .then((response) => history.push('/listaUsuarios'));
      }
    } catch (error) {
      console.log('Houve algum problema', error);
    }
  }

  return (
    <div id="page-create-user">
      <Sidebar />
      <ContainerForm>
        <main>
          <form className="create-user-form" onSubmit={onSubmit}>
            <fieldset>
              <legend>Cadastro de Usuarios</legend>

              <div className="input-block">
                <label htmlFor="cpf">CPF</label>
                <input id="CPF" name="CPF" onChange={onChange} value={values?.CPF} />
              </div>

              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input id="Nome" name="Nome" onChange={onChange} value={values?.Nome} />
              </div>

              <div className="input-block">
                <label htmlFor="admin_status">Admin:</label>
                {/* <div className="button-select">
                  <button onChange={onChangeAdmin} value={true} type="button" className="active" id="Admin" name="Admin">Sim</button>
                  <button onChange={onChangeAdmin} value={false} type="button" id="Admin" name="Admin">Não</button>
                </div> */}
                <select onChange={onChangeAdmin} htmlFor="user_admin" name="Admin" id="Admin" form="adminform">
                  <option value={1}>Sim</option>
                  <option value={0}>Não</option>
                </select>
              </div>
              <div className="input-block">
                <label htmlFor="user_status" for="status">Status</label>
                <select onChange={onChangeStatus} htmlFor="user_status" name="Status" id="Status" form="statusform">
                  <option value={1}>Ativo</option>
                  <option value={0}>Inativo</option>
                </select>
              </div>

            </fieldset>
            <div className="buttons-content">
              <button className="edit-button delete" onClick={goBack}>Voltar</button>
              <button className="edit-button" type="submit">Confirmar</button>
            </div>
          </form>

        </main>
      </ContainerForm>

    </div>
  );
}