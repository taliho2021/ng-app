import { AirAmsComponent } from './air-ams-home/air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from './air-ams-detail/air-ams-detail.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { AirAmsSummaryComponent } from './air-ams-summary/air-ams-summary.component';
import { Route } from '@angular/router';

export const airamsRoutes: Route[] = [
  { path: '', component: AirAmsComponent },
  { path: 'dashboard', component: AirAmsDashboardComponent },
  { path: 'detail', component: AirAmsDetailComponent },
  { path: 'grid', component: AirAmsGridComponent },
  { path: 'summary', component: AirAmsSummaryComponent },
];
