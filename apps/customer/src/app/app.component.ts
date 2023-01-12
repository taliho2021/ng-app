import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer';
}
