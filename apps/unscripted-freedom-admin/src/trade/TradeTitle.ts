import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "asset";

export const TradeTitle = (record: TTrade): string => {
  return record.asset?.toString() || String(record.id);
};
