import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
