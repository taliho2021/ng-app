import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { authRoutes } from '@ng-app/auth';
import { oceanRoutes } from '@ng-app/ocean';

export const appRoutes: Route[] = [
  { path: '', component:HomeComponent},
  { path: 'auth', children: authRoutes },
  { path: 'ocean', children: oceanRoutes},
  { path: 'products', loadChildren: () =>
       import('@ng-app/products').then((mod) => mod.ProductsModule) },
  { path: 'operations', loadChildren: () =>
       import('@ng-app/operations').then((mod) => mod.OperationsModule)}
]
