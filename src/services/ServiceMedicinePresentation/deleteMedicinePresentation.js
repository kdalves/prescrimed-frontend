import api from '../api'

const DeleteMedicinePresentation = async (id) => {
  const medicinePresentation = await api.delete(`apresentacao/${id}`)

  return medicinePresentation;
}

export default DeleteMedicinePresentation;
