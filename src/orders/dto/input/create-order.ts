import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'
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
  @IsOptional()
  confirmedDate?: Date

  @Field(() => OrderIDStatus)
  @IsNotEmpty()
  orderStatus: OrderIDStatus

  @Field()
  @IsNotEmpty()
  userName: string

  @Field()
  @IsEmail()
  email: string

  @Field()
  @IsNotEmpty()
  phoneNumber: string

  @Field(() => [OrderedProducts])
  @IsNotEmpty()
  orderedProductArray: OrderedProducts[]
}
