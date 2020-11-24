import api from '../api'

const GetIDAllergy = async (id) => {
  const allergyId = await api.get(`alergias/${id}`)

  return allergyId.data;
}

export default GetIDAllergy;



