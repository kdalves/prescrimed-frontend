import api from "../api";

const GetProfissionais = async (data) => {
    const profissionais = await api.get('/profissionais', data);
  
    return profissionais;
  }

  export default GetProfissionais;