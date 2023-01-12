import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './../services/user.service';

@Component({
  selector: 'ng-app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  componentActive = true;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }
}
