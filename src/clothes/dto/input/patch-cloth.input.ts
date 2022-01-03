import { Field, InputType, Int } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'
import { IsNotEmpty, IsOptional } from 'class-validator'

@InputType()
export class ClothDataToPatch {
  @Field({ nullable: true })
  @IsNotEmpty()
  name?: string

  @Field({ nullable: true })
  @IsOptional()
  description?: string

  @Field(() => Int, { nullable: true })
  @IsOptional()
  unitWeight?: number

  @Field(() => Int, { nullable: true })
  @IsOptional()
  unitPrice?: number

  @Field(() => Category, { nullable: true })
  @IsOptional()
  category?: Category
}

@InputType()
export class PatchClothArgs {
  @Field()
  @IsNotEmpty()
  _id: string
}
