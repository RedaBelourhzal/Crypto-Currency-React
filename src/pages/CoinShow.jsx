import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTickerById } from "../services/CoinService";
import Loading from "../components/Loading"; 

const CoinShow = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchCoinDetails = async () => {
      try {
        const response = await getTickerById(id);
        const data = response.data[0]; 
        setCoin(data);
        
        setTimeout(() => {
          setLoading(false); 
        }, 1000); 
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Coin Details</h1>
          <h2>Name: {coin.name}</h2>
          <p>Symbol: {coin.symbol}</p>
          <p>Price USD: ${coin.price_usd}</p>
          <p>Percent_change_1h: {coin.percent_change_1h}</p>
          <p>Percent_change_24h: {coin.percent_change_24h}</p>
          <p>Percent_change_7d: {coin.percent_change_7d}</p>
          <p>Market_Cap: {coin.market_cap_usd}</p>
          <p>Volume24: {coin.volume24}</p>
          <p>Csupply: {coin.csupply}</p>
          <p>Tsupply: {coin.tsupply}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinShow;
