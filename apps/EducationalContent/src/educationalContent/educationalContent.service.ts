import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EducationalContentServiceBase } from "./base/educationalContent.service.base";

@Injectable()
export class EducationalContentService extends EducationalContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
