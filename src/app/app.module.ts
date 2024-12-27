import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { StoresComponent } from './stores/stores.component';
import { FinancesComponent } from './finances/finances.component';
import { SettingsComponent } from './settings/settings.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module'; // Keep AppRoutingModule here
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    StoresComponent,
    FinancesComponent,
    SettingsComponent,
    AddProductComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Remove RouterModule import from here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
