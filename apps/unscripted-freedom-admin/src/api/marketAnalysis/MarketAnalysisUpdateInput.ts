import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MarketAnalysisUpdateInput = {
  analysisDate?: Date | null;
  marketType?: "Option1" | null;
  summary?: string | null;
  user?: UserWhereUniqueInput | null;
};
