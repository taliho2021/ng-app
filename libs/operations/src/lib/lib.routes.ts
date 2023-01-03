import { AirAmsComponent } from './air-ams/air-ams.component';
import { AirExportComponent } from './air-export/air-export.component';
import { Route } from '@angular/router';

export const operationsRoutes: Route[] = [
  {path: 'air-ams', component: AirAmsComponent },
  {path: 'air-export', component: AirExportComponent}
];
