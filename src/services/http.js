import axios from "axios";

const options = {
  baseURL: "http://localhost:8080/api",
  headers: { "Content-type": "application/json" },
};
export default axios.create(options);
