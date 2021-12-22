import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ClothesService } from './clothes.service'
import { DeleteClothArgs } from './dto/input/delete-cloth.args'
import { GetClothArgs } from './dto/args/get-cloth.args'
import { CreateClothInput } from './dto/input/create-cloth.input'
import { Cloth } from './models/cloth.model'
import { ClothDataToPatch, PatchClothArgs } from './dto/input/patch-cloth.input'
@Resolver(() => Cloth)
export class ClothesResolver {
  constructor(private clothesService: ClothesService) {}

  @Mutation(() => Cloth)
  async createCloth(@Args('createClothData') createClothData: CreateClothInput): Promise<Cloth> {
    return await this.clothesService.createCloth(createClothData)
  }

  @Query(() => [Cloth]) // <--- What will the query return?
  async findAllClothes(): Promise<Cloth[]> {
    return this.clothesService.getClothes() // Resolve the query
  }

  @Query(() => Cloth)
  async findClothById(@Args() getClothData: GetClothArgs): Promise<Cloth> {
    return this.clothesService.getCloth(getClothData)
  }

  @Mutation(() => String)
  async removeClothById(@Args('clothIdToRemove') deleteClothArgs: DeleteClothArgs): Promise<any> {
    return this.clothesService.removeCloth(deleteClothArgs)
  }

  @Mutation(() => Cloth)
  async patchClothById(
    @Args('clothIdToPatch') patchClothArgs: PatchClothArgs,
    @Args('clothDataToPatch') clothDataToPatch: ClothDataToPatch
  ): Promise<Cloth> {
    return this.clothesService.patchCloth(patchClothArgs, clothDataToPatch)
  }
}
