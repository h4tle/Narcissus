import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { "Content-type": "application/json" },
});

// instance.defaults.headers.common["Authorization"] =
//   "Bearer " + sessionStorage.getItem("Token");

export default instance;
