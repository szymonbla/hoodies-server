import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Category, CategorySchema } from 'categories/categories.schema'
import { ClothesResolver } from './clothes.resolver'
import { Cloth, ClothSchema } from './clothes.schema'
import { ClothesService } from './clothes.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cloth.name, schema: ClothSchema }]),
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])
  ],
  providers: [ClothesResolver, ClothesService]
})
export default class ClothesModule {}
