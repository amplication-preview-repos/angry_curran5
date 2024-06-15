import { EducationalContent } from "../educationalContent/EducationalContent";
import { MarketAnalysis } from "../marketAnalysis/MarketAnalysis";
import { JsonValue } from "type-fest";
import { Strategy } from "../strategy/Strategy";
import { Trade } from "../trade/Trade";

export type User = {
  createdAt: Date;
  educationalContents?: Array<EducationalContent>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  marketAnalyses?: Array<MarketAnalysis>;
  riskTolerance?: "Option1" | null;
  roles: JsonValue;
  strategies?: Array<Strategy>;
  subscriptionStatus?: "Option1" | null;
  trades?: Array<Trade>;
  updatedAt: Date;
  username: string;
};
