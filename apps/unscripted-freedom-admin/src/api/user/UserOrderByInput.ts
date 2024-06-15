import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  educationalContents?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  marketAnalyses?: SortOrder;
  password?: SortOrder;
  riskTolerance?: SortOrder;
  roles?: SortOrder;
  strategies?: SortOrder;
  subscriptionStatus?: SortOrder;
  trades?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
