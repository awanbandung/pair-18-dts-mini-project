import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    // MY API KEY
    api_key: "9da923e1db186bb5fb723cb9190ebf11",
  },
});

export default tmdbInstance;
