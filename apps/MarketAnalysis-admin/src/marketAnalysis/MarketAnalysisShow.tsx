import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MarketAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analysisDate" source="analysisDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="marketType" source="marketType" />
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
