import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const EducationalContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <SelectInput
          source="contentType"
          label="contentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
        <TextInput label="User ID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
