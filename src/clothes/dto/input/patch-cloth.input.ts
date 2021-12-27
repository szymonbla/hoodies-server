import { Field, InputType, Int } from '@nestjs/graphql'
<<<<<<< HEAD
import { Category } from 'categories/models/category.model'
=======
>>>>>>> main
import { IsNotEmpty } from 'class-validator'

@InputType()
export class ClothDataToPatch {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field(() => Int, { nullable: true })
  unitWeight?: number

  @Field(() => Int, { nullable: true })
  unitPrice?: number

<<<<<<< HEAD
  @Field(() => Category, { nullable: true })
  category?: Category
=======
  @Field({ nullable: true })
  category?: string // TODO References to Categotry Object
>>>>>>> main
}

@InputType()
export class PatchClothArgs {
  @Field()
  @IsNotEmpty()
  _id: string
}
