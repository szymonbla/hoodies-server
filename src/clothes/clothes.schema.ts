import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
<<<<<<< HEAD
import { Category } from 'categories/categories.schema'
import { Document, Types } from 'mongoose'

export type ClothDocument = Cloth & Document

@Schema({ collection: 'clothes' })
=======
import { Document } from 'mongoose'

export type ClothDocument = Cloth & Document

@Schema({collection: 'clothes'})
>>>>>>> main
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
<<<<<<< HEAD
  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: Category
=======
  @Prop()
  category: string // TODO References to Categotry Object
>>>>>>> main
}

export const ClothSchema = SchemaFactory.createForClass(Cloth)
