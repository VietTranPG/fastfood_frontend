import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProviderComponent } from './provider/provider.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductListComponent, ProductTypeComponent,ProductComponent, ProviderComponent  ]
})
export class ProductModule { }
