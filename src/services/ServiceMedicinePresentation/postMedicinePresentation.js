import api from '../api'

const PostMedicinePresentation = async (data) => {
     await api.post('/medicamentodetalhes', data);
}

export default PostMedicinePresentation;