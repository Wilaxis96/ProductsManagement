import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppServiceService } from './app-service.service';
import { DataTableModule } from "angular2-datatable";

import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';

import { TextMaskModule } from 'angular2-text-mask';
import { HomeComponent } from './home/home.component';
import { FilterTablePipe } from './products/pipes/filter-table.pipe';


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'products/create-product', component: CreateProductComponent },
  { path: 'products/update-product/:id', component: UpdateProductComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    HomeComponent,
    FilterTablePipe
  ],
  imports: [
    TextMaskModule,
    FormsModule,
    CommonModule,
    DataTableModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [
    AppServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
