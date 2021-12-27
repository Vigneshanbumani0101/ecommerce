import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CategoryResolver } from './service/category.resolver';
import { DataService } from './service/data.service';

const routes: Routes = [
  { path: 'category/:id', component: CategoriesComponent, 
  
  resolve:{
     category: CategoryResolver
  } 
},
  {
    path: 'product/:id/:name',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'home', component: HomeComponent, resolve: {
      employees: DataService
    }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
