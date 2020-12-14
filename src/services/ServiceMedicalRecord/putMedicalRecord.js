import api from '../api'

const PutMedicalRecord = async (id, data) => {
     await api.put(`/prescricao/${id}`, data);
}

export default PutMedicalRecord;