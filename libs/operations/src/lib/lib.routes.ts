import { CmsqComponent } from './cmsq/cmsq.component';
import { OperationsHomeComponent } from './operations-home/operations-home.component';
import { Route } from '@angular/router';
import { airamsRoutes } from './air-ams/air-ams-routes';
import { airexportRoutes } from './air-export/air-export-routes';
import { isfRoutes } from './isf/isf-routes';

export const operationsRoutes: Route[] = [
  { path: '', component: OperationsHomeComponent },
  {
    path: 'air-ams',
    children: airamsRoutes,
  },
  { path: 'air-export', children: airexportRoutes },
  { path: 'cmsq', component: CmsqComponent },
  { path: 'isf', children: isfRoutes },
  {
    path: 'trucking',
    loadChildren: () =>
      import('./trucking/trucking.module').then((m) => m.TruckingModule),
  },
];
