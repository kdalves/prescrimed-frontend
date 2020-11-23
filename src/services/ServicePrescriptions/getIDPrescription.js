import api from '../api'

//   ### PROTOCOLOS ###

const GetIDPrescription = async (id) => {
  const prescriptionId = await api.get(`protocolos/${id}`)

  return prescriptionId.data;
}

export default GetIDPrescription;



