import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from '../service/data.resolver';
import { ProductComponent } from './product.component';

const productRoutes: Routes = [
  {path:'', component: ProductComponent, resolve: {
    product: PostResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }