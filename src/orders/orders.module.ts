import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Order } from './models/orders.model'
import { OrdersResolver } from './order.resolver'
import { OrderSchema } from './orders.schema'
import { OrdersService } from './orders.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  providers: [OrdersResolver, OrdersService]
})
export default class OrdersModule {}
