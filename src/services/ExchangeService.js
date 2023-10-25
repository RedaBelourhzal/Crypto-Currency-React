import axios from "axios";

export const getExchanges = () => {
  return axios.get("https://api.coinlore.net/api/exchanges/");
};

export const getExchangeById = (id) => {
  return axios.get(`https://api.coinlore.net/api/exchange/?=${id}`);
};
