import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'

@ArgsType()
export class GetByStatusArgs {
  @Field(() => OrderIDStatus)
  @IsNotEmpty()
  orderStatus: OrderIDStatus
}
