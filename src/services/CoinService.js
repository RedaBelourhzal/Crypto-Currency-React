import axios from "axios";

export const getTickers = (start = 0, limit = 100) => {
  return axios.get(
    `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`
  );
};

export const getTickerById = (id) => {
  return axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
};
