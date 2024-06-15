import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  asset?: StringNullableFilter;
  entryPoint?: FloatNullableFilter;
  exitPoint?: FloatNullableFilter;
  id?: StringFilter;
  profitLoss?: FloatNullableFilter;
  tradeDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
