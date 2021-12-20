import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { productModel } from '../model/model.interface';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    
  product: any;
  categories: productModel[] = [];
  category!: string | null;
  valueee: any;

  constructor(private route : ActivatedRoute ,private titleService:Title) {
  }
   
  ngOnInit(): void {
    
    this.route.data.subscribe((response:any)=> {
      this.product = response.product
    })
     this.titleService.setTitle(this.product.name);

  }

}
