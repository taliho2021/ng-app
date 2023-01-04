import { AirAmsDashboardComponent } from '../air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from '../air-ams-detail/air-ams-detail.component';
import { AirAmsGridComponent } from '../air-ams-grid/air-ams-grid.component';
import { AirAmsSummaryComponent } from '../air-ams-summary/air-ams-summary.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material';

@Component({
  selector: 'ng-app-air-ams',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    AirAmsDashboardComponent,
    AirAmsGridComponent,
    AirAmsSummaryComponent,
    AirAmsDetailComponent,
  ],
  templateUrl: './air-ams.component.html',
  styleUrls: ['./air-ams.component.scss'],
})
export class AirAmsComponent {}
