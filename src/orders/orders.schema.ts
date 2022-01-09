import { ID, Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator'
import { Cloth } from 'clothes/clothes.schema'
import { Types } from 'mongoose'
import { OrderStatus } from 'orderStatus/orderStatus.schema'

@Schema()
class OrderedProduct {
  @Prop({ type: Types.ObjectId, ref: Cloth.name })
  product: Cloth

  @Prop(() => Int)
  amount: string
}

export const OrderedProductSchema = SchemaFactory.createForClass(OrderedProduct)

export type OrderDocument = Order & Document
@Schema()
export class Order {
  @Prop(() => ID)
  _id: string

  @Prop({ type: Date, default: Date.now })
  confirmedDate: Date

  @Prop({ type: Types.ObjectId, ref: OrderStatus.name })
  orderStatus: OrderStatus

  @Prop()
  @IsNotEmpty()
  userName: string

  @Prop()
  @IsEmail()
  email: string

  @Prop()
  @IsPhoneNumber('PL')
  @IsNotEmpty()
  phoneNumber: string

  @Prop({ type: [OrderedProductSchema] })
  @IsNotEmpty()
  orderedProductArray: [OrderedProduct]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
