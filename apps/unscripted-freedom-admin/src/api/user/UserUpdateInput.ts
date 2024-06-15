import { EducationalContentUpdateManyWithoutUsersInput } from "./EducationalContentUpdateManyWithoutUsersInput";
import { MarketAnalysisUpdateManyWithoutUsersInput } from "./MarketAnalysisUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StrategyUpdateManyWithoutUsersInput } from "./StrategyUpdateManyWithoutUsersInput";
import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  educationalContents?: EducationalContentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  marketAnalyses?: MarketAnalysisUpdateManyWithoutUsersInput;
  password?: string;
  riskTolerance?: "Option1" | null;
  roles?: InputJsonValue;
  strategies?: StrategyUpdateManyWithoutUsersInput;
  subscriptionStatus?: "Option1" | null;
  trades?: TradeUpdateManyWithoutUsersInput;
  username?: string;
};
