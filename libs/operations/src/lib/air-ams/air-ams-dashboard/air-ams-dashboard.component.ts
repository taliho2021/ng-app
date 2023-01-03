import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ng-app/material';

@Component({
  selector: 'ng-app-air-ams-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './air-ams-dashboard.component.html',
  styleUrls: ['./air-ams-dashboard.component.scss'],
})
export class AirAmsDashboardComponent {}
