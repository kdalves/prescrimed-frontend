import api from '../api'

const DeleteAllergy = async (id) => {
  const allergy = await api.delete(`alergias/${id}`)

  return allergy;
}

export default DeleteAllergy;