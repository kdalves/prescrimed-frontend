import api from "../api";

const GetMedicinePresentations = async (data) => {
  const medicinePresentations = await api.get('/apresentacao', data);

  return medicinePresentations;
}

export default GetMedicinePresentations;