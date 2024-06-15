/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Trade as PrismaTrade,
  User as PrismaUser,
} from "@prisma/client";

export class TradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TradeCountArgs, "select">): Promise<number> {
    return this.prisma.trade.count(args);
  }

  async trades<T extends Prisma.TradeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeFindManyArgs>
  ): Promise<PrismaTrade[]> {
    return this.prisma.trade.findMany<Prisma.TradeFindManyArgs>(args);
  }
  async trade<T extends Prisma.TradeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeFindUniqueArgs>
  ): Promise<PrismaTrade | null> {
    return this.prisma.trade.findUnique(args);
  }
  async createTrade<T extends Prisma.TradeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeCreateArgs>
  ): Promise<PrismaTrade> {
    return this.prisma.trade.create<T>(args);
  }
  async updateTrade<T extends Prisma.TradeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeUpdateArgs>
  ): Promise<PrismaTrade> {
    return this.prisma.trade.update<T>(args);
  }
  async deleteTrade<T extends Prisma.TradeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TradeDeleteArgs>
  ): Promise<PrismaTrade> {
    return this.prisma.trade.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.trade
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
