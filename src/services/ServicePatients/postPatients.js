import api from '../api';

const PostPatients = async (data) => {
     await api.post('/pacientes', data);
}

export default PostPatients;