import { CmsqComponent } from './cmsq/cmsq.component';
import { IsfComponent } from './isf/isf.component';
import { OperationsHomeComponent } from './operations-home/operations-home.component';
import { Route } from '@angular/router';
import { airamsRoutes } from './air-ams/air-ams-routes';
import { airexportRoutes } from './air-export/air-export-routes';

export const operationsRoutes: Route[] = [
  { path: '', component: OperationsHomeComponent },
  {
    path: 'air-ams',
    children: airamsRoutes,
  },
  { path: 'air-export', children: airexportRoutes },
  { path: 'cmsq', component: CmsqComponent },
  { path: 'isf', component: IsfComponent },
  {
    path: 'trucking',
    loadChildren: () =>
      import('./trucking/trucking.module').then((m) => m.TruckingModule),
  },
];
