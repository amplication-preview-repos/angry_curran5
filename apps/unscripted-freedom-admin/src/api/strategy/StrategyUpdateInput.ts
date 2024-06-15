import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StrategyUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
