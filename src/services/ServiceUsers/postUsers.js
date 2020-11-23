import api from '../api'

const PostUsers = async (data) =>{
     await api.post('/usuarios', data);
}

export default PostUsers;