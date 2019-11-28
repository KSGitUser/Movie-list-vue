import { IGenre } from './IGenre';

export default class Genre implements IGenre {
  id = 0;
  name = '';
  constructor(init?: Partial<IGenre>) {
    Object.assign(this, init);
  }
}