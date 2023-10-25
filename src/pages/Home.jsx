import React, { useEffect, useState } from "react";
import { getTickers } from "../services/CoinService";
import CoinContext from "../contexts/CoinContext";
import CoinsList from "../components/Coins/CoinsList";
import Loading from "../components/Loading";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTickers()
      .then((response) => {
        const data = response.data.data;
        setCoins(data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CoinContext.Provider value={coins}>
      {loading ? <Loading /> : <CoinsList />}
    </CoinContext.Provider>
  );
};

export default Home;
