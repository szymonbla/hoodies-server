import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
<<<<<<< HEAD
import { Category } from 'categories/models/category.model'
=======
>>>>>>> main

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

<<<<<<< HEAD
  @Field(() => Category)
  categoryId: Category
=======
  @Field({ description: 'Cloth category' })
  category: string // TODO References to Categotry Object
>>>>>>> main
}
