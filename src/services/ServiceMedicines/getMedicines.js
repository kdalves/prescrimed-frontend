import api from "../api";

const GetMedicines = async (data) => {
  const medicines = await api.get('/medicamentos', data);

  return medicines;
}

export default GetMedicines;