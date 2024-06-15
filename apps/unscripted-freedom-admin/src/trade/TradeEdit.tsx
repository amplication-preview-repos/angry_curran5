import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
