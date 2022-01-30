import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsArray, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString, Matches } from 'class-validator'
import { Cloth, ClothId } from 'clothes/models/cloth.model'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'

@ObjectType()
@InputType('OrderProductsInput')
export class OrderedProducts {
  @Field(() => Cloth)
  product: Cloth

  @Field(() => Int)
  @IsNotEmpty()
  @IsString()
  @IsPositive()
  amount: number
}

@ObjectType()
@InputType('OrderProductIds')
export class OrderedProductArray {
  @Field(() => ClothId)
  @IsNotEmpty()
  product: ClothId

  @Field(() => Int, { description: 'Amount of product' })
  @IsNotEmpty()
  @IsPositive()
  @Matches('^[1-9][0-9]*$')
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
  @IsPhoneNumber('PL')
  phoneNumber: string

  @Field(() => [OrderedProductArray])
  @IsArray()
  @IsNotEmpty()
  orderedProductArray: OrderedProductArray[]
}
