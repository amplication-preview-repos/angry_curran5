import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MarketAnalysisWhereInput = {
  analysisDate?: DateTimeNullableFilter;
  id?: StringFilter;
  marketType?: "Option1";
  summary?: StringNullableFilter;
  userId?: StringNullableFilter;
};
