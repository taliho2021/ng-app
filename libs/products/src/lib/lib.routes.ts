import { ProductsComponent } from './containers/products/products.component';
import { Route } from '@angular/router';
import { StackedTopbarComponent } from './containers/stacked-topbar/stacked-topbar.component';

export const productsRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  {path: '', component: ProductsComponent},
  {path: 'stacked', component: StackedTopbarComponent}
];
