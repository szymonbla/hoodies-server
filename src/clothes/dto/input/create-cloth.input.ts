import { Field, InputType, Int } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'

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

  @Field(() => Category)
  categoryId: Category
}
