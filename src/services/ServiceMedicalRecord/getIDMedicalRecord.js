import api from '../api'

const GetIDMedicalRecord = async (id) => {
  const medicalRecordId = await api.get(`prontuario/${id}`)

  return medicalRecordId.data;
}

export default GetIDMedicalRecord;



