import { ArgsType, Field, ID } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@ArgsType()
export class GetOrderByIdArgs {
  @Field()
  @IsNotEmpty()
  @IsString()
  _id: string
}
