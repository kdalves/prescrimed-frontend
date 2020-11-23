import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../styles/pages/patients/patient-registration.css';
import AllergySearch from '../../components/search/allergy/allergySearch';
import Sidebar from '../../components/sidebar/Sidebar';
import calcule from '../../images/ciclo.png';
import api from '../../services/api';
import ContainerForm from "../../components/UI/container/containerForm";

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

export default function PatientRegistration() {

  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();

    api.post('/pacientes', values)
      .then((response) => {
        history.push('/listaPacientes')
      });
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
                <input id="Nome" name="Nome" onChange={onChange} />
              </div>

              <div className="input-block">
                <label htmlFor="name_social">Nome Social</label>
                <input id="NomeSocial" name="NomeSocial" onChange={onChange} />
              </div>
              <div className="grid-names">
                <div className="input-block">
                  <label htmlFor="document">Documento</label>
                  <input id="Documento" name="Documento" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="genero">Sexo</label>
                  <input id="Sexo" name="Sexo" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="cpf">CPF</label>
                  <input id="CPF" name="CPF" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="nascimento">Nascimento</label>
                  <input id="Nascimento" name="Nascimento" onChange={onChange} />
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="nacionalidade">Naturalidade</label>
                <input id="Naturalidade" name="Naturalidade" onChange={onChange} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Medidas do Paciente</legend>
              <div className="inputs-measures" name="body_surfacex">
                <div className="input-block">
                  <label htmlFor="peso">Peso</label>
                  <input id="Peso" name="Peso" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="altura">Altura</label>
                  <input id="Altura" name="Altura" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="superficie">Superfície Corporal</label>
                  <input id="Superficie" name="Superficie" value="" onChange={onChange} />
                  <img className="calculeSurface" src={calcule} href="#" />
                </div>
              </div>

            </fieldset>

            <fieldset>
              <legend>Alergias do Paciente</legend>
              <Link to="/adicionarAlergia">Adicionar alergia</Link>
              <AllergySearch />
            </fieldset>

            <fieldset>
              <legend>Outras informações do paciente</legend>
              <div className="input-block">
                <label htmlFor="endereco">Endereço</label>
                <input id="Endereco" name="Endereco" onChange={onChange} />
              </div>

              <div className="input-block">
                <label htmlFor="complement">Complemento</label>
                <input id="Complemento" name="Complemento" onChange={onChange} />
              </div>
              <div className="grid-address">
                <div className="input-block">
                  <label htmlFor="cep">CEP</label>
                  <input id="Cep" name="Cep" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="bairro">Bairro</label>
                  <input id="Bairro" name="Bairro" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="cidade">Cidade</label>
                  <input id="Cidade" name="Cidade" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="uf">UF</label>
                  <input id="UF" name="UF" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="fone">Fone</label>
                  <input id="Fone" name="Fone" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="foneCelular">Fone celular</label>
                  <input id="FoneCelular" name="FoneCelular" onChange={onChange} />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações do Responsável</legend>
              <div className="grid-responsible-info">
                <div className="input-block">
                  <label htmlFor="responsibleName">Nome</label>
                  <input id="Responsavel" name="Responsavel" onChange={onChange} />
                </div>

                <div className="input-block">
                  <label htmlFor="responsiblePhone">Fone</label>
                  <input id="FoneResponsavel" name="FoneResponsavel" onChange={onChange} />
                </div>
              </div>

            </fieldset>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>

            <button className="confirm-button cancel" type="submit">
              Cancelar
            </button>
          </form>
        </main>
      </ContainerForm>

    </div>
  );
}

