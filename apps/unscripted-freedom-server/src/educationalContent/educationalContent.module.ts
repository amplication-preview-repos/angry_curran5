import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EducationalContentModuleBase } from "./base/educationalContent.module.base";
import { EducationalContentService } from "./educationalContent.service";
import { EducationalContentController } from "./educationalContent.controller";
import { EducationalContentResolver } from "./educationalContent.resolver";

@Module({
  imports: [EducationalContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EducationalContentController],
  providers: [EducationalContentService, EducationalContentResolver],
  exports: [EducationalContentService],
})
export class EducationalContentModule {}
