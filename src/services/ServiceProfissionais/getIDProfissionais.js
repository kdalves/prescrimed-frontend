import api from '../api'

const GetIDProfissionais = async (id) => {
  const profissionaisId = await api.get(`profissionais/${id}`)

  return profissionaisId.data;
}

export default GetIDProfissionais;



