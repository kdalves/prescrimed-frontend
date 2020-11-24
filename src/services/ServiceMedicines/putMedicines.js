import api from '../api'

const PutMedicines = async (id, data) => {
     await api.put(`/medicamentos/${id}`, data);
}

export default PutMedicines;