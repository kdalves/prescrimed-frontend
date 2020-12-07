import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import '../../../styles/pages/medicines/apresentacao/apresentacao-registration.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import PostPresentation from '../../../services/ServiceMedicinePresentation/postMedicinePresentation';
import GetIDPresentation from '../../../services/ServiceMedicinePresentation/getIDMedicinePresentation';
import PutPresentation from '../../../services/ServiceMedicinePresentation/putMedicinePresentation';

const initialValue = {
  "IdMedicamentoDetalhe": 0,
  "IdMedicamento": 0,
  "Descricao": "",
  "Dosagem": 0,
  "MedidaDose": "",
  "IdVia": 0
}

export default function ApresentacaoRegistration({ id }) {
  const { goBack } = useHistory();

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  const postPresentation = async (value) => {
    const response = await PostPresentation(value);
    console.log('post apresentacao:', response);
  }

  const putPresentation = async (id, value) => {
    const response = await PutPresentation(id, value);
    console.log('put apresentacao:', response);
  }

  useEffect(() => {
    const loadPresentation = async (id) => {
      const response = await GetIDPresentation(id);
      console.log('load apresentacao: ', response[0]);
      setValues(response[0]);
    }
    loadPresentation(id);

  }, []);

  function onChange(event) { //recebe um evento e captura um nome e valor do input
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    try {
      if (id) {
        putPresentation(id, values)
          .then(() =>
            history.push('/cadastroMedicamentos')
          );

      } else {
        postPresentation(values)
          .then(() =>
            history.push('/cadastroMedicamentos')
          );
      }
    } catch (error) {
      console.log('Houve algum problema: ', error);
      console.error(error);
    }
    // axios.post('http://localhost:3333/apresentacoes', values)
    //   .then((response) => {
    //     history.push('/listaMedicos')
    //   }); //cria
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
              <input id="Descricao" name="Descricao" onChange={onChange} value={values?.Descricao} />
            </div>
            <div className="input-block flex">
              <label>Dose</label>
              <input id="Dosagem" name="Dosagem" onChange={onChange} value={values?.Dosagem} />
              <label>Unidade de medida</label>
              <input id="MedidaDose" name="MedidaDose" onChange={onChange} value={values?.MedidaDose} />
              <label>Via</label>
              <input id="IdVia" name="IdVia" onChange={onChange} value={values?.IdVia} />
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