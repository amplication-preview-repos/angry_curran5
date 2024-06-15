/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Strategy as PrismaStrategy } from "@prisma/client";

export class StrategyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StrategyCountArgs, "select">): Promise<number> {
    return this.prisma.strategy.count(args);
  }

  async strategies<T extends Prisma.StrategyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StrategyFindManyArgs>
  ): Promise<PrismaStrategy[]> {
    return this.prisma.strategy.findMany<Prisma.StrategyFindManyArgs>(args);
  }
  async strategy<T extends Prisma.StrategyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StrategyFindUniqueArgs>
  ): Promise<PrismaStrategy | null> {
    return this.prisma.strategy.findUnique(args);
  }
  async createStrategy<T extends Prisma.StrategyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StrategyCreateArgs>
  ): Promise<PrismaStrategy> {
    return this.prisma.strategy.create<T>(args);
  }
  async updateStrategy<T extends Prisma.StrategyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StrategyUpdateArgs>
  ): Promise<PrismaStrategy> {
    return this.prisma.strategy.update<T>(args);
  }
  async deleteStrategy<T extends Prisma.StrategyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StrategyDeleteArgs>
  ): Promise<PrismaStrategy> {
    return this.prisma.strategy.delete(args);
  }
}
