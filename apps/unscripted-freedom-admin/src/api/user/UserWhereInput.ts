import { EducationalContentListRelationFilter } from "../educationalContent/EducationalContentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketAnalysisListRelationFilter } from "../marketAnalysis/MarketAnalysisListRelationFilter";
import { StrategyListRelationFilter } from "../strategy/StrategyListRelationFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type UserWhereInput = {
  educationalContents?: EducationalContentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  marketAnalyses?: MarketAnalysisListRelationFilter;
  riskTolerance?: "Option1";
  strategies?: StrategyListRelationFilter;
  subscriptionStatus?: "Option1";
  trades?: TradeListRelationFilter;
  username?: StringFilter;
};
