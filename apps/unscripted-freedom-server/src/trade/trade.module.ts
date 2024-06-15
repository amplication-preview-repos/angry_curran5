import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TradeModuleBase } from "./base/trade.module.base";
import { TradeService } from "./trade.service";
import { TradeController } from "./trade.controller";
import { TradeResolver } from "./trade.resolver";

@Module({
  imports: [TradeModuleBase, forwardRef(() => AuthModule)],
  controllers: [TradeController],
  providers: [TradeService, TradeResolver],
  exports: [TradeService],
})
export class TradeModule {}
