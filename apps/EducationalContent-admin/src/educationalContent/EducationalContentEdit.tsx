import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const EducationalContentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
