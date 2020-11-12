import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../../styles/pages/patients/patient-registration.css';
import AllergySearch from '../../components/search/allergy/allergySearch';
import Sidebar from '../../components/sidebar/Sidebar';
import calcule from '../../images/ciclo.png';
import api from '../../services/api';

const initialValue = {
  "Nome": "",
  "NomeSocial": "" ,
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
  
  const[values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event){
    const{ name, value} = event.target;
    setValues({ ...values, [name]: value});
  }

  function onSubmit(event){
    event.preventDefault();

    api.post('/pacientes', values)
      .then((response) => {
        history.push('/listaPacientes')
      });
  }

  return (
    <div id="page-create-patient">
      <Sidebar />
      <main> 
        <form className="create-patient-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>Cadastro de Pacientes</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" onChange={onChange}/>
            </div>

            <div className="input-block">
              <label htmlFor="name_social">Nome Social</label>
              <input id="name_social" onChange={onChange}/> 
            </div>
            <div className="grid-names">
              <div className="input-block">
                <label htmlFor="document">Documento</label>
                <input id="document" onChange={onChange}/> 
              </div>

              <div className="input-block">
                <label htmlFor="gender">Sexo</label>
                <input id="gender" onChange={onChange}/> 
              </div>

              <div className="input-block">
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" onChange={onChange}/> 
              </div>

              <div className="input-block">
                <label htmlFor="birth">Nascimento</label>
                <input id="birth" onChange={onChange}/> 
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="nationality">Naturalidade</label>
              <input id="nationality" onChange={onChange}/> 
            </div>
          </fieldset>
          <fieldset>
            <legend>Medidas do Paciente</legend>
            <div className="inputs-measures" name="body_surfacex">
              <div className="input-block">
                <label htmlFor="weight">Peso</label>
                <input id="weight" name="weightx" onChange={onChange}/>
              </div>

              <div className="input-block">
                <label htmlFor="height">Altura</label>
                <input id="height" name="heightx" onChange={onChange}/>
              </div>

              <div className="input-block">
                <label htmlFor="body_surface">Superfície Corporal</label>
                <input id="body_surface" name="resultsurfacex" value="" onChange={onChange}/>
                <img className="calculeSurface" src={calcule} href="#"/>
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
              <label htmlFor="address">Endereço</label>
              <input id="address" onChange={onChange} /> 
            </div>

            <div className="input-block">
              <label htmlFor="complement">Complemento</label>
              <input id="complement" onChange={onChange} /> 
            </div>
            <div className="grid-address">
              <div className="input-block">
                <label htmlFor="cep">CEP</label>
                <input id="cep" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="neighborhood">Bairro</label>
                <input id="neighborhood" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="city">Cidade</label>
                <input id="city" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="uf">UF</label>
                <input id="uf" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="telephone">Fone</label>
                <input id="telephone" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="cellPhone">Fone celular</label>
                <input id="cellPhone" onChange={onChange} /> 
              </div>
            </div>


          </fieldset>

          <fieldset>
            <legend>Informações do Responsável</legend>
            <div className="grid-responsible-info">
              <div className="input-block">
                <label htmlFor="responsibleName">Nome</label>
                <input id="responsibleName" onChange={onChange} /> 
              </div>

              <div className="input-block">
                <label htmlFor="responsiblePhone">Fone</label>
                <input id="responsiblePhone" onChange={onChange} /> 
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
    </div>
  );
}

