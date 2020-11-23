import api from '../api'

const PostProfissionais = async (data) =>{
     await api.post('/profissionais', data);
}

export default PostProfissionais;