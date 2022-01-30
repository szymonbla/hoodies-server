import { ID, Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Cloth } from 'clothes/clothes.schema'
import { OrderStatus } from 'orderStatus/orderStatus.schema'
import { Document, Types } from 'mongoose'

export type OrderDocument = Order & Document
export type OrderedProductDocument = OrderedProduct & Document

@Schema({ _id: false })
export class OrderedProduct {
  @Prop(() => Int)
  amount: number

  @Prop({ type: Types.ObjectId, ref: Cloth.name })
  product: Cloth
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

  @Prop()
  orderedProductArray: [OrderedProduct]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
