import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material'

@Component({
  selector: 'ng-app-stacked-topbar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './stacked-topbar.component.html',
  styleUrls: ['./stacked-topbar.component.scss'],
})
export class StackedTopbarComponent {}
