import { ArgsType, Field } from '@nestjs/graphql'
import { OrderIDStatus } from 'orderStatus/models/orderStatus.model'

@ArgsType()
export class GetByStatusArgs {
  @Field(() => OrderIDStatus)
  orderStatus: OrderIDStatus
}
