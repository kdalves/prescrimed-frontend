import api from '../api'

const DeleteUser = async (id) => {
  const user = await api.delete(`usuarios/${id}`)

  return user;
}

export default DeleteUser;