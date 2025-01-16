import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4444/api", // Backend base URL
});

export default API;
