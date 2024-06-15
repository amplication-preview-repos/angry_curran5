import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketAnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MarketAnalyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="analysisDate" source="analysisDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="marketType" source="marketType" />
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
