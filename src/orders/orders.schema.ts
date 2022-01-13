import { Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Cloth } from 'clothes/clothes.schema'
import { OrderStatus } from 'orderStatus/orderStatus.schema'
import { Document, Types } from 'mongoose'

export type OrderDocument = Order & Document

@Schema()
class OrderedProduct {
  @Prop()
  _id: string

  @Prop({ type: Types.ObjectId, ref: Cloth.name })
  product: Cloth

  @Prop(() => Int)
  amount: string
  @Prop(() => Int)
  test: string
}

export const OrderedProductSchema = SchemaFactory.createForClass(OrderedProduct)

@Schema()
export class Order {
  @Prop()
  _id: string

  @Prop({ type: Date, default: Date.now })
  confirmedDate: Date

  @Prop({ type: Types.ObjectId, ref: OrderStatus.name })
  orderStatus: OrderStatus

  @Prop()
  userName: string

  @Prop()
  email: string

  @Prop()
  phoneNumber: string

  @Prop({ type: [OrderedProductSchema] })
  orderedProductArray: [OrderedProduct]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
