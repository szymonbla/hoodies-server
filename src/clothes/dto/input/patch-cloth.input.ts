import { Field, InputType, Int } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'
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

  @Field(() => Category, { nullable: true })
  category?: Category
}

@InputType()
export class PatchClothArgs {
  @Field()
  @IsNotEmpty()
  _id: string
}
