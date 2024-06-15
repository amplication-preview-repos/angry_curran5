/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EducationalContent } from "../../educationalContent/base/EducationalContent";
import { MarketAnalysis } from "../../marketAnalysis/base/MarketAnalysis";
import { EnumUserRiskTolerance } from "./EnumUserRiskTolerance";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Strategy } from "../../strategy/base/Strategy";
import { EnumUserSubscriptionStatus } from "./EnumUserSubscriptionStatus";
import { Trade } from "../../trade/base/Trade";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [EducationalContent],
  })
  @ValidateNested()
  @Type(() => EducationalContent)
  @IsOptional()
  educationalContents?: Array<EducationalContent>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [MarketAnalysis],
  })
  @ValidateNested()
  @Type(() => MarketAnalysis)
  @IsOptional()
  marketAnalyses?: Array<MarketAnalysis>;

  @ApiProperty({
    required: false,
    enum: EnumUserRiskTolerance,
  })
  @IsEnum(EnumUserRiskTolerance)
  @IsOptional()
  @Field(() => EnumUserRiskTolerance, {
    nullable: true,
  })
  riskTolerance?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [Strategy],
  })
  @ValidateNested()
  @Type(() => Strategy)
  @IsOptional()
  strategies?: Array<Strategy>;

  @ApiProperty({
    required: false,
    enum: EnumUserSubscriptionStatus,
  })
  @IsEnum(EnumUserSubscriptionStatus)
  @IsOptional()
  @Field(() => EnumUserSubscriptionStatus, {
    nullable: true,
  })
  subscriptionStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Trade],
  })
  @ValidateNested()
  @Type(() => Trade)
  @IsOptional()
  trades?: Array<Trade>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { User as User };
