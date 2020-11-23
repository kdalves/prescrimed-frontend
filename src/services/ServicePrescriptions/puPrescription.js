import api from '../api'

//   ### PROTOCOLOS ###
const PutPrescription = async (id , data) =>{
     await api.put(`/protocolos/${id}`, data);
}

export default PutPrescription;