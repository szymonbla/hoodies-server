import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'
import { Cloth, ClothId } from 'clothes/models/cloth.model'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'

@ObjectType()
@InputType('OrderProductsInput')
export class OrderedProducts {
  @Field(() => Cloth)
  product: Cloth

  @Field(() => Int)
  amount: string
}

@ObjectType()
@InputType('OrderProductIds')
export class OrderedProductArray {
  @Field(() => ClothId)
  productId: ClothId

  @Field(() => Int)
  amount: number
}

@InputType()
export class CreateOrderInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  confirmedDate?: Date

  @Field(() => OrderIDStatus)
  @IsNotEmpty()
  orderStatus: OrderIDStatus

  @Field()
  @IsString()
  @IsNotEmpty()
  userName: string

  @Field()
  @IsEmail()
  @IsString()
  email: string

  @Field()
  @IsNotEmpty()
  phoneNumber: string

  @Field(() => [OrderedProductArray])
  @IsNotEmpty()
  orderedProductArray: OrderedProductArray[]
}
