import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../styles/pages/patients/patient-registration.css';
import AllergySearch from '../../components/search/allergy/allergySearch';
import Sidebar from '../../components/sidebar/Sidebar';
import calcule from '../../images/ciclo.png';
import api from '../../services/api';
import ContainerForm from "../../components/UI/container/containerForm";
import PutPatient from '../../services/ServicePatients/putPatient';
import PostPatient from '../../services/ServicePatients/postPatients';
import GetIDPatient from '../../services/ServicePatients/getIDPatient';
import { set } from "date-fns";

const initialValue = {
  "Nome": "",
  "NomeSocial": "",
  "Nascimento": "",
  "Sexo": "",
  "Documento": "",
  "CPF": "",
  "Endereco": "",
  "Complemento": "",
  "Bairro": "",
  "Cidade": "",
  "UF": "",
  "Cep": "",
  "Fone": "",
  "FoneCelular": "",
  "Responsavel": "",
  "FoneResponsavel": "",
  "Naturalidade": "",
  "Peso": 0,
  "Altura": 0,
  "Superficie": 0
}

export default function PatientRegistration({ id }) {

  const [values, setValues] = useState(initialValue);
  const history = useHistory();
  const { goBack } = useHistory();

  const postPatient = async (value) => {
    const response = await PostPatient(value)
    console.log('postPatient', response);
  }

  const putPatient = async (id, value) => {
    const response = await PutPatient(id, value)
    console.log('putPatient:', response);
  }

  useEffect(() => {

    const loadPatient = async (id) => {
      const response = await GetIDPatient(id);
      setValues(response[0]);
    }

    loadPatient(id);

  }, []);

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onChangeSex(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }
  console.log(values);

  function onSubmit(event) {
    event.preventDefault();

    try {

      if (id) {
        putPatient(id, values)
          .then((response) => history.push('/listaPacientes'));
      } else {
        console.log('entrou no post', id);
        console.log('values', values);
        postPatient(values)
          .then((response) => history.push('/listaPacientes'))
      }
    } catch (error) {
      console.log('Houve algum problema', error);
    }

    // api.post('/pacientes', values)
    //   .then((response) => {
    //     history.push('/listaPacientes')
    //   });
  }

  return (
    <div id="page-create-patient">
      <Sidebar />
      <ContainerForm>
        <main>
          <form className="create-patient-form" onSubmit={onSubmit}>
            <fieldset>
              <legend>Cadastro de Pacientes</legend>

              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input id="Nome" name="Nome" onChange={onChange} value={values?.Nome} />
              </div>

              <div className="input-block">
                <label htmlFor="name_social">Nome Social</label>
                <input id="NomeSocial" name="NomeSocial" onChange={onChange} value={values?.NomeSocial} />
              </div>
              <div className="grid-names">
                <div className="right input-block">
                  <label htmlFor="document">Documento</label>
                  <input id="Documento" name="Documento" onChange={onChange} value={values?.Documento} />
                </div>

                <div className="left input-block">
                  <label htmlFor="sexo" for="Sexo">Sexo</label>
                  <select onChange={onChangeSex} htmlFor="sexo" name="Sexo" id="Sexo" form="sexoform">
                    <option value={values?.Sexo === "M"}>Masculino</option>
                    <option value={values?.Sexo === "F"}>Feminino</option>
                  </select>
                </div>

                <div className="right input-block">
                  <label htmlFor="cpf">CPF</label>
                  <input id="CPF" name="CPF" onChange={onChange} value={values?.CPF} />
                </div>

                <div className="left input-block">
                  <label htmlFor="nascimento">Nascimento</label>
                  <input id="Nascimento" name="Nascimento" onChange={onChange} value={values?.Nascimento} />
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="nacionalidade">Naturalidade</label>
                <input id="Naturalidade" name="Naturalidade" onChange={onChange} value={values?.Naturalidade} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Medidas do Paciente</legend>
              <div className="inputs-measures" name="body_surfacex">
                <div className="right input-block">
                  <label htmlFor="peso">Peso</label>
                  <input id="Peso" name="Peso" onChange={onChange} value={values?.Peso} />
                </div>

                <div className="right input-block">
                  <label htmlFor="altura">Altura</label>
                  <input id="Altura" name="Altura" onChange={onChange} value={values?.Altura} />
                </div>

                <div id="block-superficie" className="input-block">
                  <label htmlFor="superficie">Superfície Corporal</label>
                  <div className="calculate-super">
                    <input id="Superficie" name="Superficie" value="" onChange={onChange} value={values?.Superficie} />
                    <img className="calculeSurface" src={calcule} href="#" />
                  </div>

                </div>
              </div>

            </fieldset>

            <fieldset>
              <legend>Alergias do Paciente</legend>
              <Link to="/cadastroAlergia">Adicionar alergia</Link>
              <AllergySearch id={id} />
            </fieldset>

            <fieldset>
              <legend>Outras informações do paciente</legend>
              <div className="input-block">
                <label htmlFor="endereco">Endereço</label>
                <input id="Endereco" name="Endereco" onChange={onChange} value={values?.Endereco} />
              </div>

              <div className="input-block">
                <label htmlFor="complement">Complemento</label>
                <input id="Complemento" name="Complemento" onChange={onChange} value={values?.Complemento} />
              </div>
              <div className="grid-address">
                <div className="right input-block">
                  <label htmlFor="cep">CEP</label>
                  <input id="Cep" name="Cep" onChange={onChange} value={values?.Cep} />
                </div>

                <div className="left input-block">
                  <label htmlFor="bairro">Bairro</label>
                  <input id="Bairro" name="Bairro" onChange={onChange} value={values?.Bairro} />
                </div>

                <div className="right input-block">
                  <label htmlFor="cidade">Cidade</label>
                  <input id="Cidade" name="Cidade" onChange={onChange} value={values?.Cidade} />
                </div>

                <div className="left input-block">
                  <label htmlFor="uf">UF</label>
                  <input id="UF" name="UF" onChange={onChange} value={values?.UF} />
                </div>

                <div className="right input-block">
                  <label htmlFor="fone">Fone</label>
                  <input id="Fone" name="Fone" onChange={onChange} value={values?.Fone} />
                </div>

                <div className="left input-block">
                  <label htmlFor="foneCelular">Fone celular</label>
                  <input id="FoneCelular" name="FoneCelular" onChange={onChange} value={values?.FoneCelular} />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações do Responsável</legend>
              <div className="grid-responsible-info">
                <div className="right input-block">
                  <label htmlFor="responsibleName">Nome</label>
                  <input id="Responsavel" name="Responsavel" onChange={onChange} value={values?.Responsavel} />
                </div>

                <div id="fone-responsavel" className="left input-block">
                  <label htmlFor="responsiblePhone">Fone</label>
                  <input id="FoneResponsavel" name="FoneResponsavel" onChange={onChange} value={values?.FoneResponsavel} />
                </div>
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

