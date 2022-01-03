import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'
import { IsNotEmpty, IsOptional } from 'class-validator'

@ObjectType()
@InputType('ClothInput')
export class Cloth {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Cloth name', nullable: true })
  @IsOptional()
  name: string

  @Field({ description: 'Cloth description' })
  @IsNotEmpty()
  description: string

  @Field(() => Int, { description: 'Cloth unit weight' })
  @IsNotEmpty()
  unitWeight: number

  @Field(() => Int, { description: 'Cloth unit price' })
  @IsNotEmpty()
  unitPrice: number

  @Field(() => Category)
  @IsNotEmpty()
  categoryId: Category
}
