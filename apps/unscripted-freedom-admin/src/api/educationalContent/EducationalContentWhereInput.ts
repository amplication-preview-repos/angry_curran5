import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EducationalContentWhereInput = {
  content?: StringNullableFilter;
  contentType?: "Option1";
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
