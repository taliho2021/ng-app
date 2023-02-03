import { AboutComponent } from './about/about.component';
import { AuthGuard } from '@ng-app/auth';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { Route } from '@angular/router';
import { authRoutes } from '@ng-app/auth';
import { oceanRoutes } from '@ng-app/ocean';
import { partiesRoutes } from '@ng-app/parties';
import { operationsRoutes } from '@ng-app/operations';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'pricing', component: PricingComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: 'ocean', children: oceanRoutes },
  {
    path: 'products',
    loadChildren: () =>
      import('@ng-app/products').then((mod) => mod.ProductsModule),
  },
  {
    path: 'parties',
    children: partiesRoutes,
  },
  { path: 'operations', children: operationsRoutes },
  {
    path: 'auth',
    children: authRoutes,
  },
];
