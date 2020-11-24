import api from '../api'

const PostMedicalRecord = async (data) => {
     await api.post('/prontuario', data);
}

export default PostMedicalRecord;