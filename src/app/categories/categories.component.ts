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
  constructor(private route: ActivatedRoute, private titleService:Title) {
  }

  ngOnInit(): void {

    this.route.data.subscribe((response:any)=> {
      this.product = response.category
      this.category = this.product.category
      this.titleService.setTitle(this.category);
    })
  }

}
