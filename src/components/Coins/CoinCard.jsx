import React from "react";

const CoinCard = ({ coin }) => {
  return (
    <div className="col-12" key={coin.rank}>
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{coin.rank}</div>

            <div className="text-2xl font-bold text-900">{coin.name}</div>
            <div className="flex align-items-center gap-3">
              Price :<span className="font-semibold">{coin.price_usd}$</span>
            </div>

            <div className="flex align-items-center gap-3">
              <i className="pi pi-tag"></i>
              Percent_change_24h :
              <span className="font-semibold">{coin.percent_change_24h}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
