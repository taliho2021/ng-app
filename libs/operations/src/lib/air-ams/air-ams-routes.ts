import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from './air-ams-detail/air-ams-detail.component';
import { Route } from '@angular/router';

export const airamsRoutes: Route[] = [
  {path: 'dashboard', component: AirAmsDashboardComponent },
  {path: 'detail', component: AirAmsDetailComponent}
];
