import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class OrderStatus {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Order status name' })
  orderStatusName: string
}
