import axios from "axios";

//we make the api call using axios
export default axios.create({
  baseURL: "https://hospiapp-backend2.herokuapp.com/",
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
  },
});
