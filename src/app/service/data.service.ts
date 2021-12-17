import { Injectable } from '@angular/core';
import * as categories from '../model/products.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts() {
    return categories;
  }
}
