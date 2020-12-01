import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Table } from 'react-bootstrap';
import '../../styles/pages/medicines/medicines-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import ContainerForm from "../../components/UI/container/containerForm";
// import deleteIcon from '../../images/deleteColor.png';
// import updateIcon from '../../images/refreshColor.png';
import deleteIcon from '../../images/close.png';
import updateIcon from '../../images/edit-notebook.png';

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

              <div className="radio input-block">
                <label htmlFor="tipo_medicamento" className="title">Tipo</label>
                <div className="radio-medicines">
                  <input id="generico" type="radio" name="generico" />
                  <label>Genérico</label>
                </div>
                <div className="radio-medicines">
                  <input type="radio" name="similar" />
                  <label>Similar</label>
                </div>
                <div className="radio-medicines">
                  <input type="radio" name="referencia" />
                  <label>Referência</label>
                </div>
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
                    <td className="bank-actions">  <Link to={`/editarApresentacao/` /*${apresentation.IdProfissional}*/}><img alt="Update" src={updateIcon} /></Link>  <button /*onClick={() => deleteApresentacao(apresentation.IdMedicamento)}*/><img alt="Delete" src={deleteIcon} /></button> </td>

                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>

            </fieldset>
            <div className="buttons-content">
              <button className="edit-button delete">Cancelar</button>
              <button className="edit-button" type="submit">Confirmar</button>
            </div>
          </form>

        </main>
      </ContainerForm>
    </div>
  );
}