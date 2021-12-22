import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClothesService } from './clothes.service';
import { GetClothArgs } from './dto/args/get-cloth.args';
import { CreateClothInput } from './dto/input/create-cloth.input';
import { Cloth } from './models/cloth.model';
@Resolver(() => Cloth)
export class ClothesResolver {
  constructor(private clothesService: ClothesService) {}

  @Mutation(() => Cloth)
  async createCloth(
    @Args('createClothData') createClothData: CreateClothInput,
  ): Promise<Cloth> {
    return await this.clothesService.createCloth(createClothData);
  }

  @Query(() => [Cloth])
  async findAllClothes(): Promise<Cloth[]> {
    return this.clothesService.getClothes();
  }

  @Query(() => Cloth)
  async findClothById(@Args() getClothData: GetClothArgs): Promise<Cloth> {
    return this.clothesService.getCloth(getClothData);
  }
}
