import api from '../api'

const PutMedicinePresentation = async (id, data) => {
     await api.put(`/apresentacao/${id}`, data);
}

export default PutMedicinePresentation;