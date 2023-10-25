// CoinsList.js
import React, { useContext, useState } from "react";
import CoinContext from "../../contexts/CoinContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";

const CoinsList = () => {
  const coins = useContext(CoinContext);
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 mx-auto">
            <DataTable
              value={coins}
              stripedRows
              tableStyle={{ minWidth: "100%" }}
              paginator={true}
              paginatorPosition="bottom"
              rows={15}
              totalRecords={coins.length}
              selectionMode="single"
              selection={selectedCoin}
              onSelectionChange={(e) => setSelectedCoin(e.value)}
            >
              <Column field="rank" header="Rank"></Column>
              <Column
                field="name"
                header="Name"
                body={(rowData) => (
                  <Link to={`/coins/${rowData.id}`}>{rowData.name}</Link>
                )}
              ></Column>
              <Column field="price_usd" header="Price"></Column>
              <Column field="percent_change_24h" header="24H"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinsList;
