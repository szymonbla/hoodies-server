import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { OrderStatusDocument } from './orderStatus.schema'
import { OrderStatus } from './models/orderStatus.model'

@Injectable()
export class OrderStatusServices {
  constructor(@InjectModel(OrderStatus.name) private orderStatusModel: Model<OrderStatusDocument>) {}

  async getAllOrderStatuses(): Promise<OrderStatus[]> {
    return this.orderStatusModel.find()
  }
}
