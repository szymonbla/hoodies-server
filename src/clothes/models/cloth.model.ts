import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator'

@ObjectType()
@InputType('ClothInput')
export class Cloth {
  @Field(() => ID)
  @IsNotEmpty()
  _id: string

  @Field({ description: 'Cloth name', nullable: true })
  @IsNotEmpty()
  name?: string

  @Field({ description: 'Cloth description' })
  @IsNotEmpty()
  description: string

  @Field(() => Int, { description: 'Cloth unit weight' })
  @IsNotEmpty()
  @IsPositive()
  unitWeight: number

  @Field(() => Int, { description: 'Cloth unit price' })
  @IsNotEmpty()
  @IsPositive()
  unitPrice: number

  @Field(() => Category)
  @IsNotEmpty()
  categoryId: Category
}

@ObjectType()
@InputType('ClothInputId')
export class ClothId {
  @Field(() => ID)
  @IsNotEmpty()
  _id: string
}
