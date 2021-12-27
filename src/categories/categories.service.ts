import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Category } from './models/category.model'
import { CategoryDocument } from './categories.schema'
import { CreateCategoryInput } from './dto/input/create-category'
import { GetCategoryArgs } from './dto/args/get-category'
import { DeleteCategoryInput } from './dto/input/delete-category'

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async createCategory(createCategorydata: CreateCategoryInput): Promise<Category> {
    const createdCategory = new this.categoryModel({
      _id: uuidv4(),
      ...createCategorydata
    })

    return createdCategory.save()
  }

  async getCategory(getCategoryArgs: GetCategoryArgs): Promise<Category> {
    return this.categoryModel.findById(getCategoryArgs)
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec()
  }

  async removeCloth(deleteCategoryArgs: DeleteCategoryInput): Promise<any> {
    return this.categoryModel.deleteOne(deleteCategoryArgs)
  }
}
