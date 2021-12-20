import { Component} from '@angular/core';
import { productModel } from '../model/model.interface';
import {Title} from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  products!: productModel[];
  categories: any;
  constructor(private titleService:Title, private route : ActivatedRoute,) {
    this.titleService.setTitle("Ajio");
  }

  ngOnInit(): void {
    
    this.route.data.subscribe((response:any)=> {
      this.categories = response.employees
      this.products = (this.categories as any).default;
    })
  }
}
