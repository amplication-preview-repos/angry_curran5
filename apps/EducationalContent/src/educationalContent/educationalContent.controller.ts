import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EducationalContentService } from "./educationalContent.service";
import { EducationalContentControllerBase } from "./base/educationalContent.controller.base";

@swagger.ApiTags("educationalContents")
@common.Controller("educationalContents")
export class EducationalContentController extends EducationalContentControllerBase {
  constructor(protected readonly service: EducationalContentService) {
    super(service);
  }
}
