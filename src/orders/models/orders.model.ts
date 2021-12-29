import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { OrderStatus } from 'orderStatus/models/orderStatus.model'
import { OrderedProducts } from '../dto/input/create-order'

@ObjectType()
export class Order {
  @Field(() => ID)
  _id: string

  @Field({ nullable: true })
  confirmedDate: Date

  @Field(() => OrderStatus)
  orderStatus: OrderStatus

  @Field()
  userName: string

  @Field()
  @IsEmail()
  email: string

  @Field()
  phoneNumber: string

  @Field(() => [OrderedProducts])
  orderedProductArray: [OrderedProducts]
}
