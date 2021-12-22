import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClothesResolver } from './clothes.resolver';
import { Cloth, ClothSchema } from './clothes.schema';
import { ClothesService } from './clothes.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Cloth.name, schema: ClothSchema }])],
  providers: [ClothesResolver, ClothesService],
})
export default class ClothesModule {}
