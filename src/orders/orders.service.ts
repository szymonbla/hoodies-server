import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateOrderInput } from './dto/input/create-order'
import { Order } from './models/orders.model'
import { OrderDocument } from './orders.schema'
import { v4 as uuidv4 } from 'uuid'
import { RemoveOrderArgs } from './dto/input/remove-order'

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async createOrder(createOrderData: CreateOrderInput): Promise<Order> {
    return this.orderModel.create({ _id: uuidv4(), ...createOrderData })
  }

  async removeOrder(removeOrderArgs: RemoveOrderArgs): Promise<any> {
    return this.orderModel.deleteOne(removeOrderArgs)
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
