import api from '../api'

const DeleteProfissionais = async (id) => {
  const profissional = await api.delete(`profissionais/${id}`)

  return profissional;
}

export default DeleteProfissionais;