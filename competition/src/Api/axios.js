import axios from "axios";

const instance = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com/people", // The API (main url for fetching data) URL
});

export default instance;
