import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoriesService } from './categories.service'
import { GetCategoryArgs } from './dto/args/get-category'
import { CreateCategoryInput } from './dto/input/create-category'
import { DeleteCategoryInput } from './dto/input/delete-category'
import { Category } from './models/category.model'

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  async createCategory(@Args('createCategoryData') createCategoryInput: CreateCategoryInput): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryInput)
  }

  @Mutation(() => Category)
  async removeCategoryById(@Args('categoryIdToRemove') deleteCategoryInput: DeleteCategoryInput): Promise<any> {
    return this.categoriesService.removeCloth(deleteCategoryInput)
  }

  @Query(() => Category)
  async getCategoryById(@Args() getCategoryData: GetCategoryArgs): Promise<Category> {
    return this.categoriesService.getCategory(getCategoryData)
  }

  @Query(() => [Category])
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAllCategories()
  }
}
