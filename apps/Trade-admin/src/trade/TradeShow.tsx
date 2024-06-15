import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="asset" source="asset" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="entryPoint" source="entryPoint" />
        <TextField label="exitPoint" source="exitPoint" />
        <TextField label="ID" source="id" />
        <TextField label="profitLoss" source="profitLoss" />
        <TextField label="tradeDate" source="tradeDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
