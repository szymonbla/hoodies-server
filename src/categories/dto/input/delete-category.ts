import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class DeleteCategoryInput {
    @Field()
    _id: string
}