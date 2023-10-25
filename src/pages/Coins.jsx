import React, { useState, useEffect } from "react";
import { getTickers } from "../services/CoinService"; 
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    getTickers()
      .then((response) => {
        const data = response.data.data;
        setCoins(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const listItem = (coin) => {
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

  const gridItem = (coin) => {
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

  const itemTemplate = (coin, layout) => {
    if (!coin) {
      return;
    }

    if (layout === "list") return listItem(coin);
    else if (layout === "grid") return gridItem(coin);
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
        />
      </div>
    );
  };

  return (
    <div className="card">
      <DataView
        value={coins}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()}
      />
    </div>
  );
};
export default Coins;
