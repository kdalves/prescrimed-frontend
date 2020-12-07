import api from '../api'

const GetIDSpecialties = async (id) => {
    const especialtiesID = await api.get(`especialidade/${id}`)

    return especialtiesID.data;
}

export default GetIDSpecialties;