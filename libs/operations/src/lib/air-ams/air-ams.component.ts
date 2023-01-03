import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material'

@Component({
  selector: 'ng-app-air-ams',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './air-ams.component.html',
  styleUrls: ['./air-ams.component.scss'],
})
export class AirAmsComponent {}
