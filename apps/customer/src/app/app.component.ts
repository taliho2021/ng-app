import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutComponent } from '@ng-app/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutComponent],
})
export class AppComponent {
  title = 'customer';
}
