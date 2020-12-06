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
              <legend>Cadastro de Medicamento</legend>

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
              <AddButton text="Adicionar Apresentação" route="cadastroApresentacao" />
              <ApresentacaoSearch id={id} />

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