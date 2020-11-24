import api from "../api";

const GetAllergies = async (data) => {
  const allergies = await api.get('/alergias', data);

  return allergies;
}

export default GetAllergies;