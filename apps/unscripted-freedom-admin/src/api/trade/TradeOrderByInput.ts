import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  asset?: SortOrder;
  createdAt?: SortOrder;
  entryPoint?: SortOrder;
  exitPoint?: SortOrder;
  id?: SortOrder;
  profitLoss?: SortOrder;
  tradeDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
