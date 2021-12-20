import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService} from './data.service'

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {
    valuee:any
  constructor(private data: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    
    const category =  route.paramMap.get("id");
    const name = route.paramMap.get('name');
     this.valuee = this.data.getProduct(category,name);
    return this.valuee;
  }
}