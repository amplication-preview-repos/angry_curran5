import { User } from "../user/User";

export type Trade = {
  asset: string | null;
  createdAt: Date;
  entryPoint: number | null;
  exitPoint: number | null;
  id: string;
  profitLoss: number | null;
  tradeDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
