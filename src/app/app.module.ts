import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductInformationComponent,
    ProductSpecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
