import api from '../api'

const DeleteMedicalRecord = async (id) => {
  const medicalRecord = await api.delete(`prescricao/${id}`)

  return medicalRecord;
}

export default DeleteMedicalRecord;