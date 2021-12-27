import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { OrderStatusServices } from './orderStatus.service'
import { OrderStatusResolver } from './orderStatus.resolver'
import { OrderStatus, OrderStatusSchema } from './orderStatus.schema'

@Module({
  providers: [OrderStatusServices, OrderStatusResolver],
  imports: [MongooseModule.forFeature([{ name: OrderStatus.name, schema: OrderStatusSchema }])]
})
export default class OrderStatusModule {}
