import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TradeWhereInput = {
  asset?: StringNullableFilter;
  entryPoint?: FloatNullableFilter;
  exitPoint?: FloatNullableFilter;
  id?: StringFilter;
  profitLoss?: FloatNullableFilter;
  tradeDate?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
