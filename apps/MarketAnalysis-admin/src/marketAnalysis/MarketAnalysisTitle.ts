import { MarketAnalysis as TMarketAnalysis } from "../api/marketAnalysis/MarketAnalysis";

export const MARKETANALYSIS_TITLE_FIELD = "userId";

export const MarketAnalysisTitle = (record: TMarketAnalysis): string => {
  return record.userId?.toString() || String(record.id);
};
