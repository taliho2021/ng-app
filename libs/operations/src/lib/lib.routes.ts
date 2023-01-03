import { AirExportComponent } from './air-export/air-export.component';
import { Route } from '@angular/router';
import { IsfComponent } from './isf/isf.component';
import { CmsqComponent } from './cmsq/cmsq.component';

export const operationsRoutes: Route[] = [
  {path: 'air-ams', loadChildren: () => import ('./air-ams/air-ams-routes').then(mod =>
    mod.airamsRoutes) },
  {path: 'air-export', component: AirExportComponent},
  {path: 'cmsq', component: CmsqComponent},
  {path: 'isf', component: IsfComponent},
  {path:'trucking', loadChildren: () => import ('./trucking/trucking.module').then(m =>m.TruckingModule)}
];
