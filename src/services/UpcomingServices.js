// trendingServices.js
import axios from "axios";

const API_URL = "https://my-json-server.typicode.com/nomsociuu/FERR/upcome";

export const fetchUpcoming = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
