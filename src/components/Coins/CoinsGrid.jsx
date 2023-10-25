import React from "react";

const CoinsGrid = ({ coin }) => {
  return (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={coin.rank}>
      <div className="p-4 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{coin.name}</span>
          </div>
        </div>
        <div className="flex flex-column align-items-center gap-3 py-5">
          <div className="text-2xl font-bold">Price :{coin.price_usd}$</div>
          Percent_change_24h{" "}
          <span className="text-2xl font-semibold">
            {coin.percent_change_24h}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinsGrid;
