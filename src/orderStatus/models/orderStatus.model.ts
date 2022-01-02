import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { IsString } from 'class-validator'

@ObjectType()
@InputType('orderStatusInput')
export class OrderStatus {
  @Field(() => ID)
  @IsString()
  _id: string

  @Field({ description: 'Order status name' })
  orderStatusName: string
}
@ObjectType()
@InputType('orderId')
export class OrderIDStatus {
  @IsString()
  @Field(() => ID)
  _id: string
}
