import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  asset?: string | null;
  entryPoint?: number | null;
  exitPoint?: number | null;
  profitLoss?: number | null;
  tradeDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
