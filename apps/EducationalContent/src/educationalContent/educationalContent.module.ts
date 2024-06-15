import { Module } from "@nestjs/common";
import { EducationalContentModuleBase } from "./base/educationalContent.module.base";
import { EducationalContentService } from "./educationalContent.service";
import { EducationalContentController } from "./educationalContent.controller";
import { EducationalContentResolver } from "./educationalContent.resolver";

@Module({
  imports: [EducationalContentModuleBase],
  controllers: [EducationalContentController],
  providers: [EducationalContentService, EducationalContentResolver],
  exports: [EducationalContentService],
})
export class EducationalContentModule {}
