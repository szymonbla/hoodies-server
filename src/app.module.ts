import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { AppService } from './app.service'
import ClothesModule from './clothes/clothes.module'

@Module({
  imports: [
    ClothesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hoodies-store')
  ],
  providers: [AppService]
})
export default class AppModule {}
