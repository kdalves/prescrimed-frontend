import api from '../api'

const PostMedicinePresentation = async (data) => {
     await api.post('/apresentacao', data);
}

export default PostMedicinePresentation;