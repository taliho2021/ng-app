import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { Authenticate } from '@ng-app/data-models';

@Component({
  selector: 'ng-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe();
  }
}
