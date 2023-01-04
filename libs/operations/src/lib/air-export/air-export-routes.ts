import { AirExportComponent } from './air-export-home/air-export.component';
import { AirExportDashboardComponent } from './air-export-dashboard/air-export-dashboard.component';
import { AirExportDetailComponent } from './air-export-detail/air-export-detail.component';
import { AirExportGridComponent } from './air-export-grid/air-export-grid.component';
import { AirExportSummaryComponent } from './air-export-summary/air-export-summary.component';
import { Route } from '@angular/router';

export const airexportRoutes: Route[] = [
  { path: '', component: AirExportComponent },
  { path: 'dashboard', component: AirExportDashboardComponent },
  { path: 'detail', component: AirExportDetailComponent },
  { path: 'grid', component: AirExportGridComponent },
  { path: 'summary', component: AirExportSummaryComponent },
];
