import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TradeService } from "./trade.service";
import { TradeControllerBase } from "./base/trade.controller.base";

@swagger.ApiTags("trades")
@common.Controller("trades")
export class TradeController extends TradeControllerBase {
  constructor(
    protected readonly service: TradeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
