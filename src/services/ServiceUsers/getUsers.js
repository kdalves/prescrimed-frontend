import api from "../api";

const GetUsers = async (data) => {
    const users = await api.get('/usuarios', data);
  
    return users;
  }

  export default GetUsers;