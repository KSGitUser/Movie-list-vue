import { IGenre } from './IGenre';

export default class Genre implements IGenre {
  id: number = 0;
  name: string = '';
  constructor(init?: Partial<IGenre>) {
    Object.assign(this, init);
  }
}