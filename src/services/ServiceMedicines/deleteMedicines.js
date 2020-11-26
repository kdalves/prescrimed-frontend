import api from '../api'

const DeleteMedicines = async (id) => {
  const medicines = await api.delete(`medicamentos/${id}`)

  return medicines;
}

export default DeleteMedicines;