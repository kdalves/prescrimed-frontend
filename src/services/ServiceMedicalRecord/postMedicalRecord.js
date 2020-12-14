import api from '../api'

const PostMedicalRecord = async (data) => {
     await api.post('/prescricao', data);
}

export default PostMedicalRecord;