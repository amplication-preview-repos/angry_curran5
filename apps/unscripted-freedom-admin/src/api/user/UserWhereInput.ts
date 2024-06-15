import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  educationalContents?: JsonFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  marketAnalyses?: JsonFilter;
  riskTolerance?: "Option1";
  strategies?: JsonFilter;
  subscriptionStatus?: "Option1";
  trades?: JsonFilter;
  username?: StringFilter;
};
