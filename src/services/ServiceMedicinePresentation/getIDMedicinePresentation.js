import api from '../api'

const GetIDMedicinePresentation = async (id) => {
  const medicinePresentationId = await api.get(`apresentacao/${id}`)

  return medicinePresentationId.data;
}

export default GetIDMedicinePresentation;



