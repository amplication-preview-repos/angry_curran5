import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  riskTolerance?: SortOrder;
  roles?: SortOrder;
  subscriptionStatus?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
