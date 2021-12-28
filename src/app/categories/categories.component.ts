import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ICategory } from '../model/model.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public category!: string;
  public product!: ICategory;
  private _subscription!: Subscription;

  constructor(private _route: ActivatedRoute, private _titleService: Title) {}

  ngOnInit(): void {
   this._subscription = this._route.data.subscribe((response: any) => {
      this.product = response.category;
      this.category = this.product.category;
      this._titleService.setTitle(this.category);
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe;
  }
}
