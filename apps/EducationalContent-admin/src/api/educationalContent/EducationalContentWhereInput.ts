import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EducationalContentWhereInput = {
  content?: StringNullableFilter;
  contentType?: "Option1";
  id?: StringFilter;
  title?: StringNullableFilter;
  userId?: StringNullableFilter;
};
