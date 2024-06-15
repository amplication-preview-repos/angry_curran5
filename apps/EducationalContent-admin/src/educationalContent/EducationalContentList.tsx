import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EducationalContentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EducationalContents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <TextField label="contentType" source="contentType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
      </Datagrid>
    </List>
  );
};
