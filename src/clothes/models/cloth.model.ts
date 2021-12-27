import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'

@ObjectType()
export class Cloth {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Cloth name' })
  name: string

  @Field({ description: 'Cloth description' })
  description: string

  @Field(() => Int, { description: 'Cloth unit weight' })
  unitWeight: number

  @Field(() => Int, { description: 'Cloth unit price' })
  unitPrice: number

  @Field(() => Category)
  categoryId: Category
}
