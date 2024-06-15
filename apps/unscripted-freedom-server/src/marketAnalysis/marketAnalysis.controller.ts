import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarketAnalysisService } from "./marketAnalysis.service";
import { MarketAnalysisControllerBase } from "./base/marketAnalysis.controller.base";

@swagger.ApiTags("marketAnalyses")
@common.Controller("marketAnalyses")
export class MarketAnalysisController extends MarketAnalysisControllerBase {
  constructor(
    protected readonly service: MarketAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
