import { ID, Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Cloth } from 'clothes/clothes.schema'
import { Types } from 'mongoose'
import { OrderStatus } from 'orderStatus/orderStatus.schema'

@Schema()
class OrderedProduct {
  @Prop({ type: Types.ObjectId, ref: 'Cloth' })
  product: Cloth

  @Prop(() => Int)
  amount: string
}

export type OrderDocument = Order & Document
@Schema()
export class Order {
  @Prop(() => ID)
  _id: string

  @Prop({ type: Date })
  confirmedDate: Date

  @Prop({ type: Types.ObjectId, ref: 'OrderStatus' })
  orderStatus: OrderStatus

  @Prop()
  email: string

  @Prop()
  phoneNumber: string

  @Prop({ type: OrderedProduct, default: [] }) // lack of array ISSUE
  orderedProductArray: OrderedProduct[]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
