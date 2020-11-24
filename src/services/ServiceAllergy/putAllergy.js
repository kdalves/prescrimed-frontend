import api from '../api'

const PutAllergy = async (id, data) => {
     await api.put(`/alergias/${id}`, data);
}

export default PutAllergy;