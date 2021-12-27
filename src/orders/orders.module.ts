import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Order } from "./models/orders.model";
import { OrderSchema } from "./orders.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])]
})

export default class OrdersModule {}