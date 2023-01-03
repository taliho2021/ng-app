import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './lib.routes';
// import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes)],
  declarations: [],
})
export class ProductsModule {}
