import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarketAnalysisModuleBase } from "./base/marketAnalysis.module.base";
import { MarketAnalysisService } from "./marketAnalysis.service";
import { MarketAnalysisController } from "./marketAnalysis.controller";
import { MarketAnalysisResolver } from "./marketAnalysis.resolver";

@Module({
  imports: [MarketAnalysisModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarketAnalysisController],
  providers: [MarketAnalysisService, MarketAnalysisResolver],
  exports: [MarketAnalysisService],
})
export class MarketAnalysisModule {}
