import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CategoryDocument = Category & Document

@Schema({ collection: 'categories' })
export class Category {
  @Prop()
  _id: string
  @Prop()
  categoryName: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
