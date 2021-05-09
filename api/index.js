import axios from "axios";

//we make the api call using axios
export default axios.create({
  baseURL: "https://hospiapp-backend.herokuapp.com/",
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
  
  },
});
