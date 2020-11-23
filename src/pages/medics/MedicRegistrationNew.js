import React, {useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import '../../styles/pages/medics/medic-registration.css';
import Sidebar from '../../components/sidebar/Sidebar';
import GetIDProfissionais from "../../services/ServiceProfissionais/getIDProfissionais";
import PostProfissionais from "../../services/ServiceProfissionais/postProfissionais";
import PutProfissionais from "../../services/ServiceProfissionais/putProfissionais";

const initialValue ={
  "IdProfissional": 0,
	"Nome": "",
	"CRM": "",
	"Fone": "",
	"Email": "",
	"IdEspecialidade": 0,
	"IdCategoria": 0,
  "IdSetor": 0
}

export default function MedicRegistrationNew({ id }){  
  
  const[values, setValues] = useState(initialValue);
  const history = useHistory();

  const postProfissionais = async (valor) => {
    const response = await PostProfissionais(valor)
    console.log(response);
  }

  const putProfissionais = async (id ,valor) => {
    const response = await PutProfissionais(id ,valor)
    console.log(response);
  } 

   useEffect(() =>{

    const loadProfissionais = async (id) => {
      const response = await GetIDProfissionais(id);
      setValues(response[0]);
    }

    loadProfissionais(id);

    }, []);

  function onChange(event){ 
    const{ name, value} = event.target;

    setValues({ ...values, [name]: value});
  }

  function onSubmit(event){
    event.preventDefault(); 
  
    try{

      if(id){
        putProfissionais(id, values);
        history.push('/listaMedicos');
      }else{
        postProfissionais(values);
        history.push('/listaMedicos');
      } 
    }catch(error){
      console.log('Houve algum problema', error);
    }
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
              <input id="Nome" name="Nome" onChange={onChange} value={values?.Nome}/>
            </div>

            <div className="input-block">
              <label htmlFor="crm">CRM</label>
              <input id="CRM" name="CRM" onChange={onChange} value={values?.CRM}/>
            </div>

            <div className="input-block">
              <label htmlFor="medico_email">Email</label>
              <input id="Email" name="Email" onChange={onChange} value={values?.Email}/>
            </div>

            <div className="input-block">
              <label htmlFor="medico_fone">Fone</label>
              <input id="Fone" name="Fone" onChange={onChange} value={values?.Fone}/>
            </div>

            <div className="input-block">
              <label htmlFor="medico_categoria">Categoria</label>
              <input id="IdCategoria" name="IdCategoria" onChange={onChange} value={values?.IdCategoria}/>
            </div>

            <div className="input-block">
              <label htmlFor="medico_especialidade">Especialidade</label>
              <input id="IdEspecialidade" name="IdEspecialidade" onChange={onChange} value={values?.IdEspecialidade}/>
            </div>

            <div className="input-block">
              <label htmlFor="medico_setor">Setor</label>
              <input id="IdSetor" name="IdSetor" onChange={onChange} value={values?.IdSetor}/>
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