import { AirExportDashboardComponent } from '../air-export-dashboard/air-export-dashboard.component';
import { AirExportDetailComponent } from '../air-export-detail/air-export-detail.component';
import { AirExportGridComponent } from '../air-export-grid/air-export-grid.component';
import { AirExportSummaryComponent } from '../air-export-summary/air-export-summary.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material';

@Component({
  selector: 'ng-app-air-export',
  standalone: true,
  imports: [CommonModule,
            MaterialModule,
            AirExportComponent,
            AirExportDashboardComponent,
            AirExportDetailComponent,
            AirExportGridComponent,
            AirExportSummaryComponent],
  templateUrl: './air-export.component.html',
  styleUrls: ['./air-export.component.scss'],
})
export class AirExportComponent {}
