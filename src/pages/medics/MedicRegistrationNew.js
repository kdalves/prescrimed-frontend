import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import '../../styles/pages/medics/medic-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import GetIDProfissionais from "../../services/ServiceProfissionais/getIDProfissionais";
import PostProfissionais from "../../services/ServiceProfissionais/postProfissionais";
import PutProfissionais from "../../services/ServiceProfissionais/putProfissionais";
import ContainerForm from "../../components/UI/container/containerForm";

const initialValue = {
  "IdProfissional": 0,
  "Nome": "",
  "CRM": "",
  "Fone": "",
  "Email": "",
  "IdEspecialidade": 0,
  "IdCategoria": 0,
  "IdSetor": 0
}

export default function MedicRegistrationNew({ id }) {

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  const postProfissionais = async (valor) => {
    const response = await PostProfissionais(valor)
    console.log(response);
  }

  const putProfissionais = async (id, valor) => {
    const response = await PutProfissionais(id, valor)
    console.log(response);
  }

  useEffect(() => {

    const loadProfissionais = async (id) => {
      const response = await GetIDProfissionais(id);
      console.log(response[0]);
      setValues(response[0]);
    }

    loadProfissionais(id);

  }, []);

  function onChange(event) {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    try {

      if (id) {
        putProfissionais(id, values)
          .then(() =>
            history.push('/listaMedicos')
          );
      } else {
        postProfissionais(values)
          .then(() =>
            history.push('/listaMedicos')
          );
      }
    } catch (error) {
      console.log('Houve algum problema', error);
    }
  }

  return (
    <div id="page-create-medic">
      <Sidebar />
      <ContainerForm>
        <main>
          <form className="create-medic-form" onSubmit={onSubmit}>
            <fieldset>
              <legend>Cadastro de Médicos</legend>

              <div className="input-block">
                <label htmlFor="nome_medico">Nome</label>
                <input id="Nome" name="Nome" onChange={onChange} value={values?.Nome} />
              </div>

              <div className="input-block">
                <label htmlFor="crm">CRM</label>
                <input id="CRM" name="CRM" onChange={onChange} value={values?.CRM} />
              </div>

              <div className="input-block">
                <label htmlFor="medico_email">Email</label>
                <input id="Email" name="Email" onChange={onChange} value={values?.Email} />
              </div>

              <div className="input-block">
                <label htmlFor="medico_fone">Fone</label>
                <input id="Fone" name="Fone" onChange={onChange} value={values?.Fone} />
              </div>

              <div className="input-block">
                <label htmlFor="medico_categoria" for="medico_categoria">Categoria</label>
                <select htmlFor="medico_categoria" name="IdCategoria" id="IdCategoria" form="categoriaform">
                  <option value={values?.IdCategoria === 1}>Médico</option>
                  <option value={values?.IdCategoria === 2}>Enfermeiro</option>
                  <option value={values?.IdCategoria === 3}>Farmacêutico</option>
                  <option value={values?.IdCategoria === 4}>Recepcionista</option>
                </select>
              </div>

              <div className="input-block">
                <label htmlFor="medico_especialidade" for="medico_categoria">Especialidade</label>
                <select htmlFor="medico_especialidade" name="IdEspecialidade" id="IdEspecialidade" form="especialidadeform">
                  <option value={values?.IdEspecialidade === 1}>Cirurgião</option>
                  <option value={values?.IdEspecialidade === 2}>Psiquiatra</option>
                  <option value={values?.IdEspecialidade === 3}>Dermatologista</option>
                  <option value={values?.IdEspecialidade === 4}>Pediatra</option>
                </select>
              </div>

              <div className="input-block">
                <label htmlFor="medico_setor" for="medico_setor">Setor</label>
                <select htmlFor="medico_setor" name="IdSetor" id="IdSetor" form="setorform">
                  <option value={values?.IdSetor === 1}>Centro Cirurgico</option>
                  <option value={values?.IdSetor === 2}>Psiquiatria</option>
                  <option value={values?.IdSetor === 3}>Oncologia</option>
                  <option value={values?.IdSetor === 4}>Pediatria</option>
                </select>
              </div>

            </fieldset>

            <button className="confirm-button" type="submit">
              Confirmar
          </button>
          </form>

        </main>
      </ContainerForm>

    </div>
  );


}