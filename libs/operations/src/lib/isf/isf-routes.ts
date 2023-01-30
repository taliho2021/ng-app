import { Route } from '@angular/router';
import { IsfGridComponent } from './isf-grid/isf-grid.component';
import { IsfDashboardComponent } from './isf-dashboard/isf-dashboard.component';
import { IsfDetailComponent } from './isf-detail/isf-detail.component';
import { IsfNewComponent } from './isf-new/isf-new.component';

export const isfRoutes: Route[] = [
  { path: '', component: IsfDashboardComponent },
  { path: 'new', component: IsfNewComponent },
  { path: 'detail', component: IsfDetailComponent },
  { path: 'grid', component: IsfGridComponent },
];
