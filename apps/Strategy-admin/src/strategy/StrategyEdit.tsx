import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StrategyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
