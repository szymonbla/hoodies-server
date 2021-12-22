import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClothDocument = Cloth & Document

@Schema()
export class Cloth {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  unitWeight: number;
  @Prop()
  unitPrice: number;
  @Prop()
  category: string; // TODO References to Categotry Object
}

export const ClothSchema = SchemaFactory.createForClass(Cloth)