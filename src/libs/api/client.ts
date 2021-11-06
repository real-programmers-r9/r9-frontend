import axios from "axios";

const client = axios.create({
  withCredentials: true, //쿠키주고받는거
});
client.defaults.baseURL = "http://localhost:4000";

export default client;
