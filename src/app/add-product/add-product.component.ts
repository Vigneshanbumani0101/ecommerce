import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategory } from '../model/model.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public product!: { 
    category: string;
    items: {
      name: string;
       price: number
     } };
  category: any;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.params.subscribe((param) => {
      this.product.category = param['category'];
    });
    console.log(this.category);
  }
}
