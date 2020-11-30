import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import '../../../styles/pages/medicines/apresentacao/apresentacao-registration.css';
import Sidebar from '../../../components/sidebar/Sidebar';

const initialValue = {
  "IdUsuario": 0,
  "Nome": "",
  "CRM": "",
  "CPF": "",
  "Fone": "",
  "Email": "",
  "IdEspecialidade": 0,
  "IdCategoria": 0,
  "IdSetor": 0
}

export default function ApresentacaoRegistration() {
  const { goBack } = useHistory();
  const { id } = useParams();

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event) { //recebe um evento e captura um nome e valor do input
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault(); //n aparecer dados no link
    //utilzar o axios para fazer um request

    axios.post('http://localhost:3333/apresentacoes', values)
      .then((response) => {
        history.push('/listaMedicos')
      }); //cria
  }

  return (
    <div id="page-create-apresentacao">
      <Sidebar />
      <main>
        <form className="create-apresentacao-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>Cadastro de Apresentações</legend>

            <div className="input-block">
              <label>Descrição</label>
              <input id="Descricao" name="Descricao" onChange={onChange} />
            </div>
            <div className="input-block flex">
              <label>Dose</label>
              <input id="Dosagem" name="Dosagem" onChange={onChange} />
              <label>Unidade de medida</label>
              <input id="MedidaDose" name="MedidaDose" onChange={onChange} />
              <label>Via</label>
              <input id="IdVia" name="IdVia" onChange={onChange} />
            </div>
          </fieldset>
          <div className="buttons-content">
            <button className="edit-button delete">Cancelar</button>
            <button className="edit-button" type="submit">Salvar</button>
          </div>
        </form>

      </main>
    </div>
  );
}