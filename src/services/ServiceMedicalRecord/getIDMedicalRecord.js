import api from '../api'

const GetIDMedicalRecord = async (id) => {
  const medicalRecordId = await api.get(`prescricao/${id}`)

  return medicalRecordId.data;
}

export default GetIDMedicalRecord;



