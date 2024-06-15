import { User } from "../user/User";

export type MarketAnalysis = {
  analysisDate: Date | null;
  createdAt: Date;
  id: string;
  marketType?: "Option1" | null;
  summary: string | null;
  updatedAt: Date;
  user?: User | null;
};
