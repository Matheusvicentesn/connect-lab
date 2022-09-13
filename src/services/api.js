import axios from "axios";

const api = axios.create({
  baseURL: "https://connectlab.onrender.com",
});

export default api;

