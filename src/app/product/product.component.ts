import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { productModel } from '../model/model.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products:any;
  product: any;
  categories: productModel[] = [];

  constructor(private route : ActivatedRoute, data:DataService) {
    this.categories = (data.getProducts() as any).default;
   }
   
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.products=this.categories.find(item => item.category==params.get('id'));
      this.product = this.products.items.find((
        item: { name: string | null; }) => item.name == params.get('name'));
     })
  }

}
