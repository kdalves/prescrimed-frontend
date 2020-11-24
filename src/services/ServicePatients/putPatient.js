import api from '../api'

const PutPatient = async (id, data) => {
     await api.put(`/pacientes/${id}`, data);
}

export default PutPatient;