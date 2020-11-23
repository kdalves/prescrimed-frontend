import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Table } from 'react-bootstrap';
import '../../styles/pages/medicines/medicines-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import ContainerForm from "../../components/UI/container/containerForm";

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

export default function MedicinesRegistration() {
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

    api.post('/medicamentos', values)
      .then((response) => {
        history.push('/listaMedicos')
      }); //cria
  }

  return (
    <div id="page-create-medicines">
      <Sidebar />
      <ContainerForm>
        <main>
          <form className="create-medicines-form" onSubmit={onSubmit}>
            <fieldset>
              <legend>Cadastro de Apresentações</legend>

              <div className="input-block">
                <label htmlFor="nome_medicamento">Nome</label>
                <input id="Nome" name="Nome" onChange={onChange} />
              </div>

              <div className="input-block">
                <label htmlFor="tipo_medicamento">Tipo</label>
                <input id="generico" type="radio" name="generico" />
                <input type="radio" name="similar" />
                <input type="radio" name="referencia" />
              </div>
              <Link to="/cadastroApresentacao">
                Adicionar Apresentação
            </Link>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Dose</th>
                    <th>Unidade de Medida</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>

            </fieldset>
            <button className="confirm-button cancel" type="submit">
              Cancelar
          </button>
            <button className="confirm-button" type="submit">
              Salvar
          </button>
          </form>

        </main>
      </ContainerForm>
    </div>
  );
}