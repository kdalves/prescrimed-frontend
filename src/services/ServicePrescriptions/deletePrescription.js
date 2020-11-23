import api from '../api'
//   ### PROTOCOLOS ###

const DeletePrescription = async (id) => {
  const prescription = await api.delete(`protocolos/${id}`)

  return prescription;
}

export default DeletePrescription;