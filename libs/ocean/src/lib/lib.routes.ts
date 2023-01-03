import { OceanExportComponent } from './ocean-export/ocean-export.component';
import { OceanHomeComponent } from './ocean-home/ocean-home.component';
import { OceanImportComponent } from './ocean-import/ocean-import.component';
import { Route } from '@angular/router';

export const oceanRoutes: Route[] = [
  /* {path: 'oe', pathMatch: 'full', component: OceanExportComponent} */
  { path: '', component: OceanHomeComponent},
  { path: 'oe', pathMatch: 'full', component: OceanExportComponent },
  { path: 'oi', pathMatch: 'full', component: OceanImportComponent },
];
