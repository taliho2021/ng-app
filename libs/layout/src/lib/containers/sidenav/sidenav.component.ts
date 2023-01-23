import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {}
