import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="asset" source="asset" />
        <NumberInput label="entryPoint" source="entryPoint" />
        <NumberInput label="exitPoint" source="exitPoint" />
        <NumberInput label="profitLoss" source="profitLoss" />
        <DateTimeInput label="tradeDate" source="tradeDate" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
