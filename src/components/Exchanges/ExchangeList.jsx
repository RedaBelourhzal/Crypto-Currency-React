import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExchangeContext from "../../contexts/ExchangeContext";

const ExchangesList = () => {
  const exchanges = useContext(ExchangeContext);

  return (
    <div>
      <DataTable value={exchanges}>
        <Column field="name" header="Name"></Column>
        <Column field="country" header="Country"></Column>
        <Column field="volume" header="Volume"></Column>
        <Column field="website" header="Website"></Column>
      </DataTable>
    </div>
  );
};

export default ExchangesList;
