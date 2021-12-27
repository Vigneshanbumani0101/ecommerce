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
      console.log(this.products.items)
    this.product = this.products.items.find((
      item: { name: string | null; }) => item.name == name);
     
      return this.product;

   }

   getCategories(category) {
    this.product = (categories as any).default.find((item: { category: any; }) => item.category == category);
    
    return this.product;
}
  
  
}
