import axios from "axios";

const client = axios.create({
  withCredentials: true, // 쿠키주고받는거
});

client.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

export default client;
