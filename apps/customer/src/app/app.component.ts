import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from '@ng-app/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ng-app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, LayoutComponent],
})
export class AppComponent {
  title = 'customer';
}
