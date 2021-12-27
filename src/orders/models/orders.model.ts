import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { Cloth } from 'clothes/models/cloth.model'
import { OrderStatus } from 'orderStatus/models/orderStatus.model'

@ObjectType()
export class Order {
  @Field(() => ID)
  _id: string

  @Field({ nullable: true })
  confirmedDate: Date

  @Field(() => OrderStatus)
  orderStatus: OrderStatus

  @Field()
  @IsEmail()
  email: string

  @Field()
  phoneNumber: string

  @Field(() => [OrderedProducts])
  orderedProductArray: OrderedProducts[]
}

export class OrderedProducts {
  @Field(() => Cloth)
  product: Cloth

  @Field(() => Int)
  amount: string
}
