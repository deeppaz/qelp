import axios from "axios";

export default axios.create({
  baseURL: "http://www.1secmail.com/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});