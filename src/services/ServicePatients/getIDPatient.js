import api from '../api'

const GetIDPatient = async (id) => {
  const patientId = await api.get(`pacientes/${id}`)

  return patientId.data;
}

export default GetIDPatient;



