import axios from 'axios';

export const tmdbInstanceReq = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "255a40d45058ba666cc447e7746034d1"
  }
})
