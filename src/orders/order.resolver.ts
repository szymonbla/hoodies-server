import { HttpCode } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CreateOrderInput } from './dto/input/create-order'
import { Order } from './models/orders.model'
import { OrdersService } from './orders.service'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Mutation(() => Order)
  async createOrder(@Args('orderData') createOrderData: CreateOrderInput): Promise<Order> {
    return this.ordersService.createOrder(createOrderData)
  }
}
