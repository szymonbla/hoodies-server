import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Order } from './models/orders.model'
import { OrderDocument } from './orders.schema'

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async createOrder(): Promise<Order> {
    return
  }

  async removeOrder(): Promise<any> {
    return this.orderModel.deleteOne()
  }

  async getOrderById(): Promise<Order> {
    return
  }

  async getAllOrdersForUser(): Promise<Order[]> {
    return
  }

  async getAllOrders(): Promise<Order[]> {
    return
  }

  async patchOrder(): Promise<Order> {
    return
  }
}
