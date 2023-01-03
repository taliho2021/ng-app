import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '@ng-app/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-app-home',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
