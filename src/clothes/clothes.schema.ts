import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Category } from 'categories/categories.schema'
import { Document, Types } from 'mongoose'

export type ClothDocument = Cloth & Document

@Schema({ collection: 'clothes' })
export class Cloth {
  @Prop()
  _id: string
  @Prop()
  name: string
  @Prop()
  description: string
  @Prop()
  unitWeight: number
  @Prop()
  unitPrice: number
  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: Category
}

export const ClothSchema = SchemaFactory.createForClass(Cloth)
