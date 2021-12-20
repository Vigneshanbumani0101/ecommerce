import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as categories from '../model/products.json';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {
  product: any;
  products: any;

  constructor() { }

  getProducts() {
    return categories;  
  }
  resolve() {

    return categories;
  }

  getProduct(category, name){
    this.products=(categories as any).default.find(item => 
      item.category==category);
    this.product = this.products.items.find((
      item: { name: string | null; }) => item.name == name);
      console.log(name);
      return this.product;

   }
  
  
}
