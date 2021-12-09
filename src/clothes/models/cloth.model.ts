import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cloth' })
export class Cloth {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  //   @Field()
  //   hoodies?: Hoodies
}
