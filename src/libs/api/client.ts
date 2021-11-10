import axios from "axios";

const client = axios.create({
  withCredentials: true, // 쿠키주고받는거
});

// http://r9-backend.herokuapp.com
client.defaults.baseURL = "http://localhost:4000";

export default client;
