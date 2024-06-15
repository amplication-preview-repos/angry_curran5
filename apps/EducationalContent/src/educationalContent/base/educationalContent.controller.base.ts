/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EducationalContentService } from "../educationalContent.service";
import { EducationalContentCreateInput } from "./EducationalContentCreateInput";
import { EducationalContent } from "./EducationalContent";
import { EducationalContentFindManyArgs } from "./EducationalContentFindManyArgs";
import { EducationalContentWhereUniqueInput } from "./EducationalContentWhereUniqueInput";
import { EducationalContentUpdateInput } from "./EducationalContentUpdateInput";

export class EducationalContentControllerBase {
  constructor(protected readonly service: EducationalContentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EducationalContent })
  async createEducationalContent(
    @common.Body() data: EducationalContentCreateInput
  ): Promise<EducationalContent> {
    return await this.service.createEducationalContent({
      data: data,
      select: {
        content: true,
        contentType: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EducationalContent] })
  @ApiNestedQuery(EducationalContentFindManyArgs)
  async educationalContents(
    @common.Req() request: Request
  ): Promise<EducationalContent[]> {
    const args = plainToClass(EducationalContentFindManyArgs, request.query);
    return this.service.educationalContents({
      ...args,
      select: {
        content: true,
        contentType: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EducationalContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async educationalContent(
    @common.Param() params: EducationalContentWhereUniqueInput
  ): Promise<EducationalContent | null> {
    const result = await this.service.educationalContent({
      where: params,
      select: {
        content: true,
        contentType: true,
        createdAt: true,
        id: true,
        title: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EducationalContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEducationalContent(
    @common.Param() params: EducationalContentWhereUniqueInput,
    @common.Body() data: EducationalContentUpdateInput
  ): Promise<EducationalContent | null> {
    try {
      return await this.service.updateEducationalContent({
        where: params,
        data: data,
        select: {
          content: true,
          contentType: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EducationalContent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEducationalContent(
    @common.Param() params: EducationalContentWhereUniqueInput
  ): Promise<EducationalContent | null> {
    try {
      return await this.service.deleteEducationalContent({
        where: params,
        select: {
          content: true,
          contentType: true,
          createdAt: true,
          id: true,
          title: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
