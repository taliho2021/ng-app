import { Component, OnInit } from '@angular/core';

import { AuthService } from '@ng-app/auth';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { User } from '@ng-app/data-models';

@Component({
  selector: 'ng-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, RouterModule, MatButtonModule, CommonModule],
  providers: [AuthService],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }
}
