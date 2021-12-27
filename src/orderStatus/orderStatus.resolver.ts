import { Query, Resolver } from '@nestjs/graphql'
import { OrderStatus } from './models/orderStatus.model'
import { OrderStatusServices } from './orderStatus.service'

@Resolver(() => OrderStatus)
export class OrderStatusResolver {
  constructor(private categoriesService: OrderStatusServices) {}

  @Query(() => [OrderStatus])
  async getAllOrderStatuses(): Promise<OrderStatus[]> {
    return this.categoriesService.getAllOrderStatuses()
  }
}
