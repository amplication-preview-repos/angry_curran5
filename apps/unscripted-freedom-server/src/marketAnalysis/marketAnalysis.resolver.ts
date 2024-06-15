import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MarketAnalysisResolverBase } from "./base/marketAnalysis.resolver.base";
import { MarketAnalysis } from "./base/MarketAnalysis";
import { MarketAnalysisService } from "./marketAnalysis.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MarketAnalysis)
export class MarketAnalysisResolver extends MarketAnalysisResolverBase {
  constructor(
    protected readonly service: MarketAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
