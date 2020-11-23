import api from '../api'

const GetIDUser = async (id) => {
  const userId = await api.get(`usuarios/${id}`)

  return userId.data;
}

export default GetIDUser;



