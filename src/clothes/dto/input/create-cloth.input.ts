import { Field, FieldMiddleware, InputType, Int, MiddlewareContext, NextFn } from '@nestjs/graphql'
import { Category } from 'categories/models/category.model'
import { IsNotEmpty, IsPositive } from 'class-validator'



@InputType()
export class CreateClothInput {
  @Field()
  @IsNotEmpty()
  name: string

  @Field() // <--- GraphQL type
  @IsNotEmpty() // <--- Generic validation decorator
  description: string // <--- TypeScript type

  @Field(() => Int)
  @IsPositive()
  @IsNotEmpty()
  unitWeight: number

  @Field(() => Int)
  @IsPositive()
  @IsNotEmpty()
  unitPrice: number

  @Field(() => Category)
  @IsNotEmpty()
  categoryId: Category
}
