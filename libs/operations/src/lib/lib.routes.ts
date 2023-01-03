import { AirExportComponent } from './air-export/air-export.component';
import { Route } from '@angular/router';

export const operationsRoutes: Route[] = [
  {path: 'air-ams', loadChildren: () => import ('./air-ams/air-ams-routes').then(mod =>
    mod.airamsRoutes) },
  {path: 'air-export', component: AirExportComponent}
];
 