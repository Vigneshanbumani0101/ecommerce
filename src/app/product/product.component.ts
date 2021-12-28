import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { IProduct } from '../model/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product!: IProduct;
  private _subscription!: Subscription;

  constructor(private _route: ActivatedRoute, private _titleService: Title) {}

  ngOnInit(): void {
    this._subscription = this._route.data.subscribe((response: any) => {
      this.product = response.product;
    });
    this._titleService.setTitle(this.product.name);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe;
  }
}
