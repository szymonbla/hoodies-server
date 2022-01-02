import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'
import { Cloth } from 'clothes/models/cloth.model'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'

@ObjectType()
@InputType('OrderProductsInput')
export class OrderedProducts {
  @Field(() => Cloth)
  product: Cloth

  @Field(() => Int)
  amount: string
}

@InputType()
export class CreateOrderInput {
  @Field({ nullable: true })
  confirmedDate: Date

  @Field(() => OrderIDStatus)
  orderStatus: OrderIDStatus

  @Field()
  userName: string

  @Field()
  @IsEmail()
  email: string

  @Field()
  phoneNumber: string

  @Field(() => [OrderedProducts])
  orderedProductArray: OrderedProducts[]
}
