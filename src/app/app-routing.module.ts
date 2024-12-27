import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';  // Import your products component
import { CategoriesComponent } from './categories/categories.component';
import { StoresComponent } from './stores/stores.component';
import { FinancesComponent } from './finances/finances.component';
import { SettingsComponent } from './settings/settings.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent }, 
  {path:'categories',component:CategoriesComponent},
  {path:'stores',component:StoresComponent},
  {path:'finances',component:FinancesComponent},
  {path:'settings',component:SettingsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'logout',component:LogoutComponent}
   // Route to Products page
  // Add more routes as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
