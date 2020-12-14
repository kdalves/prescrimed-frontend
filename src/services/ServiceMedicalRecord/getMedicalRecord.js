import api from "../api";

const GetMedicalRecord = async (data) => {
  const medicalRecord = await api.get('/prescricao', data);

  return medicalRecord;
}

export default GetMedicalRecord;