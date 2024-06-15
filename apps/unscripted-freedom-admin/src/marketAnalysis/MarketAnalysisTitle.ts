import { MarketAnalysis as TMarketAnalysis } from "../api/marketAnalysis/MarketAnalysis";

export const MARKETANALYSIS_TITLE_FIELD = "id";

export const MarketAnalysisTitle = (record: TMarketAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
