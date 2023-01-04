import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material';

@Component({
  selector: 'ng-app-air-export-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './air-export-dashboard.component.html',
  styleUrls: ['./air-export-dashboard.component.scss'],
})
export class AirExportDashboardComponent {}
