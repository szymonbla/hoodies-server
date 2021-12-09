import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ClothesService } from './clothes.service';

@Resolver()
export class ClothesResolver {
  //   constructor(private readonly recipesService: ClothesService) {}

  @Query(() => String)
  async addNewCloth() {
    return 'hello clothes';
  }
}
