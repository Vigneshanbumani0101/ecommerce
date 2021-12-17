import { Component} from '@angular/core';
import { productModel } from '../model/model.interface';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  products: productModel[];
  constructor(data : DataService) {
    this.products = (data.getProducts() as any).default;
  }

}
