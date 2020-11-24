import api from '../api'

const PutMedicalRecord = async (id, data) => {
     await api.put(`/prontuario/${id}`, data);
}

export default PutMedicalRecord;