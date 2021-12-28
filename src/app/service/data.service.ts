import { Injectable } from '@angular/core';
import { ICategory } from '../model/model.interface';
import * as categories from '../model/products.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _products!: ICategory;

  constructor() {}

  /**
   *  gets all categories from the JSON file
   *
   * @returns list of categories
   */
  getProducts() {
    return categories;
  }

  /**
   *
   *  gets the desired product by product name
   *
   * @param category category name
   * @param name  product name
   * @returns sends the desired product
   */
  getProduct(category, name) {
    this._products = (categories as any).default.find(
      (item) => item.category == category
    );
    return this._products.items.find(
      (item) => item.name == name
    );
  }

  /**
   *
   *  gets the required category to display list of products
   *
   * @param category category name
   * @returns  the required category
   */
  getCategories(category) {
    return (categories as any).default.find(
      (item) => item.category == category
    );
  }
}
