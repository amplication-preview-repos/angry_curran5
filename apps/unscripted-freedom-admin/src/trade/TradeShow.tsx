import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

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
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
