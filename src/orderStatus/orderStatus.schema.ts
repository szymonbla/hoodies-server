import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type OrderStatusDocument = OrderStatus & Document

@Schema({ collection: 'orderStatuses' })
export class OrderStatus {
  @Prop()
  _id: string
  @Prop()
  orderStatusName: string
}

export const OrderStatusSchema = SchemaFactory.createForClass(OrderStatus)
