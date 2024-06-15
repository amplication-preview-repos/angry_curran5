import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EducationalContentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <TextField label="contentType" source="contentType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User ID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
