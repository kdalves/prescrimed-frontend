import api from '../api'

const PutProfissionais = async (id , data) =>{
     await api.put(`/profissionais/${id}`, data);
}

export default PutProfissionais;