import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
];
