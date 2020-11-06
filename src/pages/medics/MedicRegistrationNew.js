import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import '../../styles/pages/medics/medic-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';

const initialValue ={
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

export default function MedicRegistrationNew() {
  const { goBack } = useHistory();
  const { id } = useParams();

  const[values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(event){ 
    const{ name, value} = event.target;

    setValues({ ...values, [name]: value});
  }

  function onSubmit(event){
    event.preventDefault(); 
  
    axios.post('http://localhost:3333/profissionais', values) 
        .then((response) => {
            history.push('/listaMedicos')
        }); 
  }
  
  return (
    <div id="page-create-medic">
      <Sidebar/>
      <main>
        <form className="create-medic-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>Cadastro de Médicos</legend>

            <div className="input-block">
              <label htmlFor="nome_medico">Nome</label>
              <input id="Nome" name="Nome" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="cpf">CPF</label>
              <input id="CPF" name="CPF" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="crm">CRM</label>
              <input id="CRM" name="CRM" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="medico_email">Email</label>
              <input id="Email" name="Email" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="medico_fone">Fone</label>
              <input id="Fone" name="Fone" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="medico_categoria">Categoria</label>
              <input id="IdCategoria" name="IdCategoria" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="medico_especialidade">Especialidade</label>
              <input id="IdEspecialidade" name="IdEspecialidade" onChange={onChange} />
            </div>

            <div className="input-block">
              <label htmlFor="medico_setor">Setor</label>
              <input id="IdSetor" name="IdSetor" onChange={onChange} />
            </div>

          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
        
      </main>
    </div>
  );
}