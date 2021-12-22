import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateClothInput {
  @Field()
  name: string

  @Field() // <--- GraphQL type
  description: string // <--- TypeScript type

  @Field(() => Int)
  unitWeight: number

  @Field(() => Int)
  unitPrice: number

  @Field()
  category: string // TODO References to Categotry Object
}
