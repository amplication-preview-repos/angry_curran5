import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="asset" source="asset" />
        <NumberInput label="entryPoint" source="entryPoint" />
        <NumberInput label="exitPoint" source="exitPoint" />
        <NumberInput label="profitLoss" source="profitLoss" />
        <DateTimeInput label="tradeDate" source="tradeDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
