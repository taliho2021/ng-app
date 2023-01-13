import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { partiesRoutes } from '../lib.routes';

@Component({
  selector: 'ng-app-parties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss'],
})
export class PartiesComponent {}
