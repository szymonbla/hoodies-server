import { Field, InputType } from '@nestjs/graphql'
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'
import { OrderedProductArray } from './create-order'

@InputType()
export class IdOrderArgs {
  @Field()
  @IsNotEmpty()
  _id: string
}

@InputType()
export class OrderDataToPatch {
  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  confirmedDate?: Date

  @Field(() => OrderIDStatus, { nullable: true })
  @IsOptional()
  orderStatus?: OrderIDStatus

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  userName?: string

  @Field({ nullable: true })
  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string

  @Field({ nullable: true })
  @IsOptional()
  phoneNumber?: string

  @Field(() => [OrderedProductArray], { nullable: true })
  @IsOptional()
  orderedProductArray?: OrderedProductArray[]
}
