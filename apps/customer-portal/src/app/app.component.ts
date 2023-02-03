import { LayoutModule } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@ng-app/auth';

@Component({
  selector: 'ng-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, AuthModule, LayoutModule],
})
export class AppComponent {
  title = 'customer-portal';
}
