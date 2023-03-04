import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://dshop-backend.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
