import { Component, OnInit } from '@angular/core';

import { AuthService } from '@ng-app/auth';
import { Observable } from 'rxjs';
import { User } from '@ng-app/data-models';

@Component({
  selector: 'ng-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.user$ = this.authService.user$;
  }
}
