import api from '../api'

const GetIDMedicines = async (id) => {
  const medicinesId = await api.get(`medicamentos/${id}`)

  return medicinesId.data;
}

export default GetIDMedicines;



