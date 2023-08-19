import axios from "axios";
const API = axios.create({
  baseURL: "https://sponsornet-backend.onrender.com/",
});
export default API;
