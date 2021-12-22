import { Injectable } from '@nestjs/common'
import ClothesModule from './clothes.module'
import { Cloth } from './models/cloth.model'
import { v4 as uuidv4 } from 'uuid'
import { CreateClothInput } from './dto/input/create-cloth.input'
import { GetClothArgs } from './dto/args/get-cloth.args'
import { Model } from 'mongoose'
import { ClothDocument } from './clothes.schema'
import { InjectModel } from '@nestjs/mongoose'
import { DeleteClothArgs } from './dto/input/delete-cloth.args'
import { ClothDataToPatch, PatchClothArgs } from './dto/input/patch-cloth.input'

@Injectable()
export class ClothesService {
  constructor(@InjectModel(Cloth.name) private clothModel: Model<ClothDocument>) {}

  async createCloth(createClothData: CreateClothInput): Promise<Cloth> {
    const createdCloth = new this.clothModel({
      _id: uuidv4(),
      ...createClothData
    })

    return createdCloth.save()
  }

  async getCloth(getClothArgs: GetClothArgs): Promise<Cloth> {
    return this.clothModel.findById(getClothArgs)
  }

  async getClothes(): Promise<Cloth[]> {
    return this.clothModel.find().exec()
  }

  async removeCloth(deleteClothArgs: DeleteClothArgs): Promise<any> {
    return this.clothModel.deleteOne(deleteClothArgs)
  }

  async patchCloth(clothIdToPatch: PatchClothArgs, clothDataToPatch: ClothDataToPatch): Promise<Cloth> {
    return this.clothModel.findByIdAndUpdate(clothIdToPatch, clothDataToPatch)
  }
}
