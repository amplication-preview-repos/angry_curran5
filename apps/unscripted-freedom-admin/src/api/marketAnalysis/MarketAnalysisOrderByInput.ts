import { SortOrder } from "../../util/SortOrder";

export type MarketAnalysisOrderByInput = {
  analysisDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  marketType?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
