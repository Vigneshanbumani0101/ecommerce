import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'category/:id', component: CategoriesComponent },
  {
    path: 'product/:id/:name',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
