import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve() {
    return this.dataService.getProducts();
  }
}
