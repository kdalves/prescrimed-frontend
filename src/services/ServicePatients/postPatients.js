import api from '../api';

const PostPatients = async (data) => {
     await api.post('/pacientes', data);
     console.log('postPatients: ', data);
}

export default PostPatients;