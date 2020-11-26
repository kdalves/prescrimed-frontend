import api from '../api'

const DeleteMedicalRecord = async (id) => {
  const medicalRecord = await api.delete(`prontuario/${id}`)

  return medicalRecord;
}

export default DeleteMedicalRecord;