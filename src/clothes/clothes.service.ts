import { Injectable } from '@nestjs/common';
import { Cloth } from './models/cloth.model';

@Injectable()
export class ClothesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<Cloth> {
    return {} as any;
  }
}
