import { Field, InputType, Int } from '@nestjs/graphql'
<<<<<<< HEAD
import { Category } from 'categories/models/category.model'
=======
>>>>>>> main

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

<<<<<<< HEAD
  @Field(() => Category)
  categoryId: Category
=======
  @Field()
  category: string // TODO References to Categotry Object
>>>>>>> main
}
