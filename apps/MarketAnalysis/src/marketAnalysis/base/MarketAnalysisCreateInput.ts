/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumMarketAnalysisMarketType } from "./EnumMarketAnalysisMarketType";

@InputType()
class MarketAnalysisCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  analysisDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumMarketAnalysisMarketType,
  })
  @IsEnum(EnumMarketAnalysisMarketType)
  @IsOptional()
  @Field(() => EnumMarketAnalysisMarketType, {
    nullable: true,
  })
  marketType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { MarketAnalysisCreateInput as MarketAnalysisCreateInput };
