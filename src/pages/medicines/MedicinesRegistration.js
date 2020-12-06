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
  "IdMedicamento": 0,
  "Nome": "",
  "Tipo": ""
}

export default function MedicinesRegistration() {
  const { goBack } = useHistory();

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event) { //recebe um evento e captura um nome e valor do input
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onChangeTypes(event) {
    if (event.target.value === "generico") {
      const value = (values.Tipo = "generico");
      setValues({ ...values, value });
    } else if (event.target.value === "similar") {
      const value = (values.Tipo = "similar");
      setValues({ ...values, value });
    } else if (event.target.value === "referencia") {
      const value = (values.Tipo = "referencia");
      setValues({ ...values, value });
    }
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
                <div onChange={onChangeTypes} className="radio-medicines">
                  <input id="generico" type="radio" name="Tipo" value={"generico"} />
                  <label>Genérico</label>
                </div>
                <div onChange={onChangeTypes} className="radio-medicines">
                  <input type="radio" name="Tipo" value={"similar"} />
                  <label>Similar</label>
                </div>
                <div onChange={onChangeTypes} className="radio-medicines">
                  <input type="radio" name="Tipo" value={"referencia"} />
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
                    <td className="bank-actions">  <Link to={`/editarApresentacao/` /*${apresentation.IdProfissional}*/}><img alt="Update" src={updateIcon} width="25px" /></Link>  <button /*onClick={() => deleteApresentacao(apresentation.IdMedicamento)}*/><img alt="Delete" src={deleteIcon} width="25px" /></button> </td>

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