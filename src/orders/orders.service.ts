import { Injectable, NotFoundException } from '@nestjs/common'
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
import { OrderStatus, OrderStatusDocument } from 'orderStatus/orderStatus.schema'
import { isInputDataAlreadyExists } from 'shared/hooks/isInputDataAlreadyExist'
import { Cloth, ClothDocument } from 'clothes/clothes.schema'
@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(OrderStatus.name) private orderStatusModel: Model<OrderStatusDocument>,
    @InjectModel(Cloth.name) private clothModel: Model<ClothDocument>
  ) {}

  async createOrder(createOrderData: CreateOrderInput): Promise<Order> {
    try {
      const { orderStatus } = createOrderData
      const { orderedProductArray } = createOrderData
      const orderStatusId = orderStatus._id
      orderStatusId.toString()
      const ifOrderStatusExists = await isInputDataAlreadyExists({ orderStatusId }, this.orderStatusModel)
      const ifProductExists = await isInputDataAlreadyExists({ orderedProductArray }, this.clothModel)
      console.log(ifProductExists)
      if (ifOrderStatusExists.length === 0) {
        throw new NotFoundException('Order status does not exist')
      } else if (ifProductExists === 0) {
        throw new NotFoundException('Given product id does not exist')
      } else {
        return await (
          await (
            await this.orderModel.create({
              _id: uuidv4(),
              ...createOrderData
            })
          ).populate({ path: 'orderStatus' })
        ).populate({ path: 'orderedProductArray', model: 'Cloth' })
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async removeOrder(removeOrderArgs: RemoveOrderArgs): Promise<any> {
    return this.orderModel.deleteOne(removeOrderArgs)
  }

  async getOrderById(getByIdArgs: GetOrderByIdArgs): Promise<Order> {
    try {
      const searchedOrderId = await this.orderModel.findById(getByIdArgs).populate({ path: 'orderStatus' }).exec()
      if (searchedOrderId) {
        return searchedOrderId
      }
      throw new NotFoundException('The given id does not exist')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async getAllOrdersForUser(getForUserArgs: GetForUserArgs): Promise<Order[]> {
    try {
      const searchedOrderByUser = this.orderModel.find(getForUserArgs).populate({ path: 'orderStatus' }).exec()
      if (searchedOrderByUser) {
        return searchedOrderByUser
      }
      throw new NotFoundException('The given id does not exist')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.find().populate({ path: 'orderStatus' }).exec()
  }

  async getByStatusOrder(getByStatusArgs: GetByStatusArgs): Promise<Order[]> {
    try {
      const searchedOrderByUser = await this.orderModel.find(getByStatusArgs).populate({ path: 'orderStatus' }).exec()
      if (searchedOrderByUser.length !== 0) {
        return searchedOrderByUser
      }

      throw new NotFoundException('The given id does not exist')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  // async patchOrder(): Promise<Order> {
  //   return
  // }
}
