import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="asset" source="asset" />
        <NumberInput label="entryPoint" source="entryPoint" />
        <NumberInput label="exitPoint" source="exitPoint" />
        <NumberInput label="profitLoss" source="profitLoss" />
        <DateTimeInput label="tradeDate" source="tradeDate" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
