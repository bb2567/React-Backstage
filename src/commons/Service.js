import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userLogin(data) {
   return axios.post("/api/userlogin", data);
  },
  loadUserList(params){
    return axios.get("/per/user",{params:params})
  }
};
