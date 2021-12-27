import { ID, Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Cloth } from 'clothes/clothes.schema'
import { Types } from 'mongoose'
import { OrderStatus } from 'orderStatus/orderStatus.schema'

class OrderedProducts {
  @Prop({ type: Types.ObjectId, ref: 'Cloth' })
  product: Cloth

  @Prop(() => Int)
  amount: string
}

@Schema()
export class Order {
  @Prop(() => ID)
  _id: string

  @Prop()
  confirmedDate: Date

  @Prop({ type: Types.ObjectId, ref: 'OrderStatus' })
  orderStatus: OrderStatus

  @Prop()
  email: string

  @Prop()
  phoneNumber: string

  @Prop({ type: [OrderedProducts], default: [] })
  orderedProductArray: OrderedProducts[]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
