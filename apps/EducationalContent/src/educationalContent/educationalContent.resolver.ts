import * as graphql from "@nestjs/graphql";
import { EducationalContentResolverBase } from "./base/educationalContent.resolver.base";
import { EducationalContent } from "./base/EducationalContent";
import { EducationalContentService } from "./educationalContent.service";

@graphql.Resolver(() => EducationalContent)
export class EducationalContentResolver extends EducationalContentResolverBase {
  constructor(protected readonly service: EducationalContentService) {
    super(service);
  }
}
