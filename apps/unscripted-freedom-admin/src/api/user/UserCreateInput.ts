import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  educationalContents?: InputJsonValue;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  marketAnalyses?: InputJsonValue;
  password: string;
  riskTolerance?: "Option1" | null;
  roles: InputJsonValue;
  strategies?: InputJsonValue;
  subscriptionStatus?: "Option1" | null;
  trades?: InputJsonValue;
  username: string;
};
