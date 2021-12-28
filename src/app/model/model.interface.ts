import { IProduct } from './product.interface';

export interface ICategory {
  category: string;
  image: string;
  items: IProduct[];
}
