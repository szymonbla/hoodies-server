import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateOrderInput } from './dto/input/create-order'
import { Order } from './models/orders.model'
import { OrderDocument } from './orders.schema'
import { v4 as uuidv4 } from 'uuid'
import { RemoveOrderArgs } from './dto/input/remove-order'
import { GetOrderByIdArgs } from './dto/args/getId-order.args'
import { GetForUserArgs } from './dto/args/getForUser-order.args'
import { GetByStatusArgs } from './dto/args/getByStatus-args'

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async createOrder(createOrderData: CreateOrderInput): Promise<Order> {
    return this.orderModel.create({ _id: uuidv4(), ...createOrderData })
  }

  async removeOrder(removeOrderArgs: RemoveOrderArgs): Promise<any> {
    return this.orderModel.deleteOne(removeOrderArgs)
  }

  async getOrderById(getByIdArgs: GetOrderByIdArgs): Promise<Order> {
    return this.orderModel.findById(getByIdArgs)
  }

  async getAllOrdersForUser(getForUserArgs: GetForUserArgs): Promise<Order[]> {
    return this.orderModel.find(getForUserArgs).exec()
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().exec()
  }

  async getByStatusOrder(getByStatusArgs: GetByStatusArgs): Promise<Order[]> {
    return this.orderModel.find(getByStatusArgs).exec()
  }

  // async patchOrder(): Promise<Order> {
  //   return
  // }
}
