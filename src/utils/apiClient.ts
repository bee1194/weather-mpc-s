import axios from "axios";

import {
  API_OPENWEATHERMAP_KEY,
  API_OPENWEATHERMAP_URL,
} from "../constants/index.js";

const apiConfig = {
  baseURL: API_OPENWEATHERMAP_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: API_OPENWEATHERMAP_KEY,
  },
};

const apiClient = axios.create(apiConfig);

export default apiClient;
