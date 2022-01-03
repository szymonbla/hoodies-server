import { Field, InputType, Int } from '@nestjs/graphql'
import { CategoryId } from 'categories/models/category.model'
import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator'

@InputType()
export class ClothDataToPatch {
  @Field({ nullable: true })
  @IsOptional()
  name?: string

  @Field({ nullable: true })
  @IsOptional()
  description?: string

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsPositive()
  unitWeight?: number

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsPositive()
  unitPrice?: number

  @Field(() => CategoryId, { nullable: true })
  @IsOptional()
  category?: CategoryId
}

@InputType()
export class PatchClothArgs {
  @Field()
  @IsNotEmpty()
  _id: string
}
