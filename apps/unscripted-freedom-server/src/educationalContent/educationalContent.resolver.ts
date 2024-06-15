import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EducationalContentResolverBase } from "./base/educationalContent.resolver.base";
import { EducationalContent } from "./base/EducationalContent";
import { EducationalContentService } from "./educationalContent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EducationalContent)
export class EducationalContentResolver extends EducationalContentResolverBase {
  constructor(
    protected readonly service: EducationalContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
