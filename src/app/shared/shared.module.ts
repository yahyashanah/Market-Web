import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from '../products/components/all-products/all-products.component';
import { CartComponent } from '../carts/components/cart/cart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    CartComponent,
    AllProductsComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    SelectComponent,
    FormsModule
  ]
})
export class SharedModule { }
