
import api from '../api'

const PostAllergy = async (data) => {
     await api.post('/alergias', data);
}

export default PostAllergy;