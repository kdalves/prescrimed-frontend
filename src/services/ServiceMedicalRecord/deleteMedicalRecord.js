import api from '../api'

const DeleteMedicalRecord = async (id) => {
  const medicalRecord = await api.delete(`medicamentos/${id}`)

  return medicalRecord;
}

export default DeleteMedicalRecord;