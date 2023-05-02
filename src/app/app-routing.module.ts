import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';

const routes: Routes = [
{path: '' , component:ProductComponent},
  {path: 'product' , component:ProductComponent,
    children: [
      {path:'details' , component:ProductDetailsComponent,
        children:[
        {path:'info/:pid' , component:ProductInformationComponent},
        {path:'specs' , component:ProductSpecComponent},
        {path:'**' , redirectTo:'details', pathMatch:'full'},
        ]
      }
    ]    
  },{path:'**' , redirectTo:'product', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
