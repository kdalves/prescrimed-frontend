import api from '../api'

//   ### PROTOCOLOS ###

const PostPrescription = async (data) =>{
     await api.post('/protocolos', data);
}

export default PostPrescription;