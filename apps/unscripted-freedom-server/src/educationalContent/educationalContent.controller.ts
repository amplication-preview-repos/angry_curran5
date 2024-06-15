import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationalContentService } from "./educationalContent.service";
import { EducationalContentControllerBase } from "./base/educationalContent.controller.base";

@swagger.ApiTags("educationalContents")
@common.Controller("educationalContents")
export class EducationalContentController extends EducationalContentControllerBase {
  constructor(
    protected readonly service: EducationalContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
