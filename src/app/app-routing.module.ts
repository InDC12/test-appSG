import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:"full"
  },
  {
    path : 'home' , 
    component : HomeComponent
  },
  {
    path :'login',
    component: LoginComponent
  },
  {
    path :'products',
    component: ProductComponent
  },
  {
    path:'productDetail',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
