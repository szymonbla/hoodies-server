import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType()
@InputType('orderStatusInput')
export class OrderStatus {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Order status name' })
  orderStatusName: string
}
