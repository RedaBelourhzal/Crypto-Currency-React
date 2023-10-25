import React, { useEffect, useState } from "react";
import ExchangesList from "../components/Exchanges/ExchangeList";
import { getExchanges } from "../services/ExchangeService";
import ExchangeContext from "../contexts/ExchangeContext";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    getExchanges()
      .then((response) => {
        const data = response.data.data;
        setExchanges(data);
      })
      .catch((error) => {
        console.error("Error fetching exchanges: ", error);
      });
  }, []);

  return (
    <ExchangeContext.Provider value={exchanges}>
      <ExchangesList />
    </ExchangeContext.Provider>
  );
};

export default Exchanges;
