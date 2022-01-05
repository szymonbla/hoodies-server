import { Module } from '@nestjs/common'
import { FieldMiddleware, GraphQLModule, MiddlewareContext, NextFn } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import CategoriesModule from 'categories/categories.module'
import ClothesModule from './clothes/clothes.module'
import OrderStatusModule from 'orderStatus/orderStatus.module'
import OrdersModule from 'orders/orders.module'

@Module({
  imports: [
    ClothesModule,
    CategoriesModule,
    OrderStatusModule,
    OrdersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hoodies-store')
  ],
  providers: [AppService]
})
export default class AppModule {}
