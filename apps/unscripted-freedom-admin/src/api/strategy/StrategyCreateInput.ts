import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StrategyCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
