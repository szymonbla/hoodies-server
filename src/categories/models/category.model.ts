import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType()
@InputType('CategoryInput')
export class Category {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Category name' })
  categoryName: string
}