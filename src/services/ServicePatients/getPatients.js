import api from "../api";

const GetPatients = async (data) => {
  const patients = await api.get('/pacientes', data);

  return patients;
}

export default GetPatients;