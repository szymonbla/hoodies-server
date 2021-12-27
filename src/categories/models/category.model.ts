import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field(() => ID)
  _id: string

  @Field({ description: 'Category name' })
  categoryName: string
}
