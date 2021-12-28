import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryResolver } from './service/category.resolver';
import { HomeComponent } from './home/home.component';
import { HomeResolver } from './service/home.resolver';

const routes: Routes = [
  {
    path: 'category/:id',
    component: CategoriesComponent,

    resolve: {
      category: CategoryResolver,
    },
  },
  {
    path: 'product/:id/:name',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      employees: HomeResolver,
    },
  },
  {
    path: 'new-product/:category',
    component: AddProductComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
