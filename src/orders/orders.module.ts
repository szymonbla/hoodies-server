import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Category, CategorySchema } from 'categories/categories.schema'
import { Cloth, ClothSchema } from 'clothes/clothes.schema'
import { OrderStatus, OrderStatusSchema } from 'orderStatus/orderStatus.schema'
import { OrdersResolver } from './order.resolver'
import { Order, OrderSchema } from './orders.schema'
import { OrdersService } from './orders.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Cloth.name, schema: ClothSchema }]),
    MongooseModule.forFeature([{ name: OrderStatus.name, schema: OrderStatusSchema }]),
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])
  ],
  providers: [OrdersResolver, OrdersService]
})
export default class OrdersModule {}
