import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService} from './data.service'

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<any> {
    categories: any;
  constructor(private data: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    
    const category =  route.paramMap.get("id");
    this.categories = this.data.getCategories(category);
    console.log(this.categories)
    return this.categories;
  }
}