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
import { MarketAnalysisWhereInput } from "./MarketAnalysisWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MarketAnalysisListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MarketAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketAnalysisWhereInput)
  @IsOptional()
  @Field(() => MarketAnalysisWhereInput, {
    nullable: true,
  })
  every?: MarketAnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => MarketAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketAnalysisWhereInput)
  @IsOptional()
  @Field(() => MarketAnalysisWhereInput, {
    nullable: true,
  })
  some?: MarketAnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => MarketAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => MarketAnalysisWhereInput)
  @IsOptional()
  @Field(() => MarketAnalysisWhereInput, {
    nullable: true,
  })
  none?: MarketAnalysisWhereInput;
}
export { MarketAnalysisListRelationFilter as MarketAnalysisListRelationFilter };
