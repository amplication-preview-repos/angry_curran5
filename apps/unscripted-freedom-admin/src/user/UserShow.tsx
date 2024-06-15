import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="riskTolerance" source="riskTolerance" />
        <TextField label="Roles" source="roles" />
        <TextField label="subscriptionStatus" source="subscriptionStatus" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="EducationalContent"
          target="userId"
          label="EducationalContents"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <TextField label="contentType" source="contentType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarketAnalysis"
          target="userId"
          label="MarketAnalyses"
        >
          <Datagrid rowClick="show">
            <TextField label="analysisDate" source="analysisDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="marketType" source="marketType" />
            <TextField label="summary" source="summary" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Strategy"
          target="userId"
          label="Strategies"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Trade" target="userId" label="Trades">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
