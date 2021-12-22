import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsNotEmpty, isNotEmpty } from 'class-validator'

@ArgsType()
export class GetClothArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}