import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  educationalContents: JsonValue;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  marketAnalyses: JsonValue;
  riskTolerance?: "Option1" | null;
  roles: JsonValue;
  strategies: JsonValue;
  subscriptionStatus?: "Option1" | null;
  trades: JsonValue;
  updatedAt: Date;
  username: string;
};
