import { EducationalContentCreateNestedManyWithoutUsersInput } from "./EducationalContentCreateNestedManyWithoutUsersInput";
import { MarketAnalysisCreateNestedManyWithoutUsersInput } from "./MarketAnalysisCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StrategyCreateNestedManyWithoutUsersInput } from "./StrategyCreateNestedManyWithoutUsersInput";
import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  educationalContents?: EducationalContentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  marketAnalyses?: MarketAnalysisCreateNestedManyWithoutUsersInput;
  password: string;
  riskTolerance?: "Option1" | null;
  roles: InputJsonValue;
  strategies?: StrategyCreateNestedManyWithoutUsersInput;
  subscriptionStatus?: "Option1" | null;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  username: string;
};
