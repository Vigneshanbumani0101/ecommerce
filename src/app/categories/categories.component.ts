import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { productModel } from '../model/model.interface';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: any;
  product: any;
  products: productModel[] = [];
  constructor(private route: ActivatedRoute, data: DataService, private titleService:Title) {
    this.products = (data.getProducts() as any).default;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.category = params.get('id')
      this.titleService.setTitle(this.category);
      this.product = this.products.find(item => item.category == this.category);
    })
  }

}
