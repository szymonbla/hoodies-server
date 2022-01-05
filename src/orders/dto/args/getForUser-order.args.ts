import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@ArgsType()
export class GetForUserArgs {
  @Field()
  @IsString()
  @IsNotEmpty()
  userName: string
}
