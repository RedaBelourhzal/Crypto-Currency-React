import axios from "axios";

export const getGlobal = () => {
  return axios.get("https://api.coinlore.net/api/global/");
};
