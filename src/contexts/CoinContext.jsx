import React, { createContext, useContext, useReducer } from "react";
import CoinReducer from "../reducers/CoinReducer";
import { getTickers, getTickerById } from "../services/CoinService";

const AppContext = createContext();

export const CoinProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CoinReducer, CoinReducer.initialState);

  const values = {
    getTickers,
    getTickerById,
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
