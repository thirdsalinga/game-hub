import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5e16124305a47d88185f84312fd51af",
  },
});
