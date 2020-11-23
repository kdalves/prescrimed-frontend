import api from '../api'

const PutUser = async (id , data) =>{
     await api.put(`/usuarios/${id}`, data);
}

export default PutUser;