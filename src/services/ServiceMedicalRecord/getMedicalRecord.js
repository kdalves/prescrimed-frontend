import api from "../api";

const GetMedicalRecord = async (data) => {
  const medicalRecord = await api.get('/prontuario', data);

  return medicalRecord;
}

export default GetMedicalRecord;