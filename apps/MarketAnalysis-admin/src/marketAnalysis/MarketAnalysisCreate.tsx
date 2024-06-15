import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const MarketAnalysisCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="analysisDate" source="analysisDate" />
        <SelectInput
          source="marketType"
          label="marketType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="summary" multiline source="summary" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
