import api from '../api'

const PutMedicinePresentation = async (id, data) => {
     await api.put(`/medicamentodetalhes/${id}`, data);
}

export default PutMedicinePresentation;