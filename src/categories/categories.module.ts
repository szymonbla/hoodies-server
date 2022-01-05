import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CategoriesResolver } from './categories.resolver'
import { Category, CategorySchema } from './categories.schema'
import { CategoriesService } from './categories.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
  providers: [CategoriesResolver, CategoriesService],
  exports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])]
})
export default class CategoriesModule {}
