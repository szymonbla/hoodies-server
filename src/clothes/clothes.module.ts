import { Module } from '@nestjs/common';
import { ClothesResolver } from './clothes.resolver';

@Module({
  providers: [ClothesResolver],
})
export default class ClothesModule {}
