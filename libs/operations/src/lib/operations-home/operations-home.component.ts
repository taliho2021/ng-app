import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '@ng-app/layout';

@Component({
  selector: 'ng-app-operations-home',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './operations-home.component.html',
  styleUrls: ['./operations-home.component.scss'],
})
export class OperationsHomeComponent {}
