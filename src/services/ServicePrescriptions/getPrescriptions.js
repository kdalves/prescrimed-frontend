import api from "../api";

//   ### PROTOCOLOS ###
const GetPrescriptions = async (data) => {
    const prescriptions = await api.get('/protocolos', data);
  
    return prescriptions;
  }

  export default GetPrescriptions;