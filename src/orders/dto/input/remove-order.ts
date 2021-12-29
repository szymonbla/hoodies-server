import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class RemoveOrderArgs {
  @Field(() => ID)
  _id: string
}
