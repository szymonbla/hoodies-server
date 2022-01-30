import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateOrderInput } from './dto/input/create-order'
import { Order } from './models/orders.model'
import { OrderDocument, OrderedProduct, OrderedProductDocument } from './orders.schema'
import { v4 as uuidv4 } from 'uuid'
import { RemoveOrderArgs } from './dto/input/remove-order'
import { GetOrderByIdArgs } from './dto/args/getId-order.args'
import { GetForUserArgs } from './dto/args/getForUser-order.args'
import { GetByStatusArgs } from './dto/args/getByStatus-args'
import { OrderStatus, OrderStatusDocument } from 'orderStatus/orderStatus.schema'
import { isInputDataAlreadyExists } from 'shared/hooks/isInputDataAlreadyExist'
import { Cloth, ClothDocument } from 'clothes/clothes.schema'
import { IdOrderArgs, OrderDataToPatch } from './dto/input/patch-order'
import { checkOrderStatuesOrder } from 'shared/hooks/checkOrderStatuses'
import { Category } from 'categories/models/category.model'
import { CategoryDocument } from 'categories/categories.schema'
@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument & OrderedProductDocument>,
    @InjectModel(OrderStatus.name) private orderStatusModel: Model<OrderStatusDocument>,
    @InjectModel(Cloth.name) private clothModel: Model<ClothDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}

  async createOrder(createOrderData: CreateOrderInput): Promise<Order> {
    const checkIfProductIdIsAndAmountIsProper = async () => {
      const { orderedProductArray } = createOrderData
      let flag = true
      for (const product of orderedProductArray) {
        if (!(await isInputDataAlreadyExists(product.product._id, this.clothModel))) {
          flag = false
        } else if (product.amount < 0) {
          flag = false
        }
      }
      return flag
    }

    try {
      const { orderStatus } = createOrderData
      const { orderedProductArray } = createOrderData
      const orderStatusId = orderStatus._id
      orderStatusId.toString()
      const ifOrderStatusExists = await isInputDataAlreadyExists(orderStatusId, this.orderStatusModel)
      const countArray = orderedProductArray.forEach((item) => item.product)
      if (!ifOrderStatusExists) {
        throw new NotFoundException('Order status does not exist')
      } else if (!(await checkIfProductIdIsAndAmountIsProper())) {
        throw new NotFoundException('Given product id does not exist or amount is not positive!')
      } else {
        return await (
          await (
            await this.orderModel.create({
              _id: uuidv4(),
              ...createOrderData
            })
          ).populate({ path: 'orderStatus' })
        ).populate({
          path: 'orderedProductArray',
          populate: {
            path: '0',
            populate: {
              path: 'product',
              model: 'Cloth',
              populate: {
                path: 'categoryId',
                model: 'Category'
              }
            }
          }
        })
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
      const searchedOrderId = await this.orderModel
        .findById(getByIdArgs)
        .populate({
          path: 'orderedProductArray',
          populate: {
            path: 'product._id',
            model: 'Cloth'
          }
        })
        .exec()

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
      const searchedOrderByUser = this.orderModel
        .find(getForUserArgs)
        .populate({ path: 'orderedProductArray', populate: { path: 'product' } })
        .exec()
      if (searchedOrderByUser) {
        return searchedOrderByUser
      }
      throw new NotFoundException('The given id does not exist')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.orderModel.find().populate('orderedProductArray.product.description').exec()
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

  async patchOrder(idOrderArgs: IdOrderArgs, orderDataToPatch: OrderDataToPatch): Promise<Order> {
    try {
      const ifOrderExists = await isInputDataAlreadyExists(idOrderArgs, this.orderModel)
      const newOrderStatus = orderDataToPatch?.orderStatus?._id
      const orderStatusSequence = checkOrderStatuesOrder(ifOrderExists.orderStatus._id, newOrderStatus)

      if (!ifOrderExists) {
        throw new NotFoundException('The order id, which you want to patch, does not exist!')
      } else if (newOrderStatus && !orderStatusSequence) {
        throw new NotFoundException('Can not change order status back')
      } else if (ifOrderExists.orderStatus._id === process.env.CANCELLED_ID) {
        throw new NotFoundException('You can not change this order')
      } else {
        return this.orderModel
          .findByIdAndUpdate(idOrderArgs, orderDataToPatch, { new: true })
          .populate('orderStatus')
          .populate({
            path: 'orderedProductArray',
            populate: {
              path: '0',
              populate: {
                path: 'product',
                model: 'Cloth'
              }
            }
          })
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
