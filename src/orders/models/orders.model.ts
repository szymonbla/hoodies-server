import { Field, ID, ObjectType } from '@nestjs/graphql'
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches } from 'class-validator'
import { OrderStatus } from 'orderStatus/models/orderStatus.model'
import { OrderedProducts } from '../dto/input/create-order'

@ObjectType()
export class Order {
  @Field(() => ID)
  @IsNotEmpty()
  _id: string

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  confirmedDate?: Date

  @Field(() => OrderStatus)
  @IsNotEmpty()
  orderStatus: OrderStatus

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
  @IsPhoneNumber()
  @Matches('^[0-9]*$')
  phoneNumber: string

  @Field(() => [OrderedProducts])
  @IsNotEmpty()
  orderedProductArray: [OrderedProducts]
}
