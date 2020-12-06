import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import '../../styles/pages/medics/medic-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import GetIDProfissionais from "../../services/ServiceProfissionais/getIDProfissionais";
import PostProfissionais from "../../services/ServiceProfissionais/postProfissionais";
import PutProfissionais from "../../services/ServiceProfissionais/putProfissionais";
import ContainerForm from "../../components/UI/container/containerForm";
import { Multiselect } from 'multiselect-react-dropdown';

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
console.log(initialValue.IdCategoria);

export default function MedicRegistrationNew({ id }) {

  const [values, setValues] = useState(initialValue);
  console.log('values: ', values);

  const history = useHistory();

  const postProfissionais = async (valor) => {
    const response = await PostProfissionais(valor)
    console.log('post medicos: ', response);
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

  function onChangeCategories(event) {
    if (event.target.value === "medico") {
      const valor = (values.IdCategoria = 1);
      setValues({ ...values, valor });
    } else if (event.target.value === "enfermeiro") {
      const valor = (values.IdCategoria = 2);
      setValues({ ...values, valor });
    } else if (event.target.value === "farmaceutico") {
      const valor = (values.IdCategoria = 3);
      setValues({ ...values, valor });
    } else if (event.target.value === "recepcionista") {
      const valor = (values.IdCategoria = 4);
      setValues({ ...values, valor });
    }
  }

  function onChangeSpecialties(event) {
    if (event.target.value === "cirurgiao") {
      const valor = (values.IdEspecialidade = 1);
      setValues({ ...values, valor });
    } else if (event.target.value === "psiquiatra") {
      const valor = (values.IdEspecialidade = 2);
      setValues({ ...values, valor });
    } else if (event.target.value === "dermatologista") {
      const valor = (values.IdEspecialidade = 3);
      setValues({ ...values, valor });
    } else if (event.target.value === "pediatra") {
      const valor = (values.IdEspecialidade = 4);
      setValues({ ...values, valor });
    }
  }

  function onChangeSectors(event) {
    if (event.target.value === "centro-cirurgico") {
      const valor = (values.IdSetor = 1);
      setValues({ ...values, valor });
    } else if (event.target.value === "psiquiatria") {
      const valor = (values.IdSetor = 2);
      setValues({ ...values, valor });
    } else if (event.target.value === "oncologia") {
      const valor = (values.IdSetor = 3);
      setValues({ ...values, valor });
    } else if (event.target.value === "pediatria") {
      const valor = (values.IdSetor = 4);
      setValues({ ...values, valor });
    }
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
                <select onChange={onChangeCategories} htmlFor="medico_categoria" name="IdCategoria" id="IdCategoria" form="categoriaform">
                  <option value={"medico"}>Médico</option>
                  <option value={"enfermeiro"}>Enfermeiro</option>
                  <option value={"farmaceutico"}>Farmacêutico</option>
                  <option value={"recepcionista"}>Recepcionista</option>
                </select>
              </div>

              <div className="input-block">
                <label htmlFor="medico_especialidade" for="medico_categoria">Especialidade</label>
                <select onChange={onChangeSpecialties} htmlFor="medico_especialidade" name="IdEspecialidade" id="IdEspecialidade" form="especialidadeform">
                  <option value={'cirurgiao'}>Cirurgião</option>
                  <option value={'psiquiatra'}>Psiquiatra</option>
                  <option value={'dermatologista'}>Dermatologista</option>
                  <option value={'pediatra'}>Pediatra</option>
                </select>
                {/* <Multiselect
                  options={objectArray}
                  displayValue="key"
                  singleSelect
                /> */}
              </div>

              <div className="input-block">
                <label htmlFor="medico_setor" for="medico_setor">Setor</label>
                <select onChange={onChangeSectors} htmlFor="medico_setor" name="IdSetor" id="IdSetor" form="setorform">
                  <option value={'centro-cirurgico'}>Centro Cirurgico</option>
                  <option value={'psiquiatria'}>Psiquiatria</option>
                  <option value={'oncologia'}>Oncologia</option>
                  <option value={'pediatria'}>Pediatria</option>
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