import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import '../../styles/pages/medicines/medicines-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import api from '../../services/api';
import ContainerForm from "../../components/UI/container/containerForm";
import ApresentacaoSearch from "../../components/search/medicine/apresentacao/apresentacaoSearch";
import AddButton from '../../components/addButton/addButton';

const initialValue = {
  "IdMedicamento": 0,
  "Nome": "",
  "Tipo": ""
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

  function onChangeTypes(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  console.log(values);

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
              <legend>Cadastro de Medicamento</legend>

              <div className="input-block">
                <label htmlFor="nome_medicamento">Nome</label>
                <input id="Nome" name="Nome" onChange={onChange} />
              </div>

              <div className="input-block">
                <select onChange={onChangeTypes}
                  htmlFor="tipo_medicamento"
                  name="Tipo"
                  id="Tipo"
                  form="tipoform">
                  <option disable hidden value={""}>Selecione o tipo</option>
                  <option value={"generico"}>Genérico</option>
                  <option value={"similar"}>Similar</option>
                  <option value={"referencia"}>Referência</option>
                </select>
              </div>
              <AddButton text="Adicionar Apresentação" route="cadastroApresentacao" />
              <ApresentacaoSearch id={id} />

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