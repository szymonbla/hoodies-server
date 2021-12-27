import { ArgsType, Field } from "@nestjs/graphql";



@ArgsType()
export class GetCategoryArgs {
    @Field()
    _id: string
}