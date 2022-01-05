import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { Cloth } from './models/cloth.model'
import { v4 as uuidv4 } from 'uuid'
import { CreateClothInput } from './dto/input/create-cloth.input'
import { GetClothArgs } from './dto/args/get-cloth.args'
import { Model } from 'mongoose'
import { ClothDocument } from './clothes.schema'
import { InjectModel } from '@nestjs/mongoose'
import { DeleteClothArgs } from './dto/input/delete-cloth.args'
import { ClothDataToPatch, PatchClothArgs } from './dto/input/patch-cloth.input'
import { Category, CategoryDocument, CategorySchema } from 'categories/categories.schema'

const isInputDataAlreadyExists = async (inputDataDto, inputModel): Promise<any> => {
  return await inputModel.find(inputDataDto)
}

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Cloth.name) private clothModel: Model<ClothDocument>,
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}

  async createCloth(createClothData: CreateClothInput): Promise<Cloth> {
    try {
      const { categoryId } = createClothData
      const { _id } = categoryId
      const result = await isInputDataAlreadyExists({ _id }, this.categoryModel)
      if (result.length !== 0) {
        return (await this.clothModel.create({ _id: uuidv4(), ...createClothData })).populate('categoryId')
      } else {
        throw new NotFoundException('The given categorie id does not exist')
      }
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async getCloth(getClothArgs: GetClothArgs): Promise<Cloth> {
    try {
      const searchedClothId = await this.clothModel.findById(getClothArgs).populate('categoryId', 'categoryName')
      if (searchedClothId) {
        return searchedClothId
      }
      throw new NotFoundException('The given id does not exist')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }

  async getClothes(): Promise<Cloth[]> {
    return this.clothModel.find().populate({ path: 'categoryId' }).exec()
  }

  async removeCloth(deleteClothArgs: DeleteClothArgs): Promise<any> {
    return this.clothModel.deleteOne(deleteClothArgs)
  }

  async patchCloth(clothIdToPatch: PatchClothArgs, clothDataToPatch: ClothDataToPatch): Promise<Cloth> {
    try {
      const ifclothIdExists = await isInputDataAlreadyExists(clothIdToPatch, this.clothModel)
      if (ifclothIdExists.length === 0) {
        throw new NotFoundException('The cloth id, which you want to patch, does not exist!')
      }
      return this.clothModel.findByIdAndUpdate(ifclothIdExists, clothDataToPatch, { new: true }).populate('categoryId')
    } catch (error) {
      throw new NotFoundException(error)
    }
  }
}
