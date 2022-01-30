import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { Cloth } from 'clothes/clothes.schema'
import { GetByStatusArgs } from './dto/args/getByStatus-args'
import { GetForUserArgs } from './dto/args/getForUser-order.args'
import { GetOrderByIdArgs } from './dto/args/getId-order.args'
import { CreateOrderInput } from './dto/input/create-order'
import { IdOrderArgs, OrderDataToPatch } from './dto/input/patch-order'
import { RemoveOrderArgs } from './dto/input/remove-order'
import { Order } from './models/orders.model'
import { OrdersService } from './orders.service'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Mutation(() => Order)
  async createOrder(@Args('orderData') createOrderData: CreateOrderInput): Promise<Order> {
    return this.ordersService.createOrder(createOrderData)
  }

  @Mutation(() => Order)
  async removeOrder(@Args('orderIdToRemove') removeOrderArgs: RemoveOrderArgs): Promise<any> {
    return this.ordersService.removeOrder(removeOrderArgs)
  }

  @Query(() => [Order])
  async getAllOrdersForUser(@Args() getForUserArgs: GetForUserArgs): Promise<Order[]> {
    return this.ordersService.getAllOrdersForUser(getForUserArgs)
  }

  @Query(() => Order)
  async getOrderById(@Args() getByIdArgs: GetOrderByIdArgs): Promise<Order> {
    return this.ordersService.getOrderById(getByIdArgs)
  }

  @Query(() => [Order])
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders()
  }

  @Query(() => [Order])
  async getByStatusOrder(@Args() getByStatusArgs: GetByStatusArgs): Promise<Order[]> {
    return this.ordersService.getByStatusOrder(getByStatusArgs)
  }

  @Mutation(() => Order)
  async patchOrderById(
    @Args('orderIdToPatch') idOrderArgs: IdOrderArgs,
    @Args('orderDataToPatch') orderDataToPatch: OrderDataToPatch
  ): Promise<Order> {
    return this.ordersService.patchOrder(idOrderArgs, orderDataToPatch)
  }
}
