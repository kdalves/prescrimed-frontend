import api from '../api'

const DeletePatient = async (id) => {
  const patient = await api.delete(`pacientes/${id}`)

  return patient;
}

export default DeletePatient;