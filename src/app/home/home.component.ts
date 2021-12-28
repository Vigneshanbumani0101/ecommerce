import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ICategory } from '../model/model.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public products!: ICategory[];
  private _subscription!: Subscription;

  constructor(private _titleService: Title, private _route: ActivatedRoute) {
    this._titleService.setTitle('Ajio');
  }

  ngOnInit(): void {
    this._subscription = this._route.data.subscribe((response: any) => {
      this.products = (response.employees as any).default;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe;
  }
}
