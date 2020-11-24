import api from '../api'

const PostMedicines = async (data) => {
     await api.post('/medicamentos', data);
}

export default PostMedicines;