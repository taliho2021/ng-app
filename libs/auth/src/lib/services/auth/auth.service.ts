import { Authenticate, User } from '@ng-app/data-models';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  private userSubject$ = new BehaviorSubject<User>(this.user);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:8000/auth/signin', authenticate)
      .pipe(tap((user: User) => this.userSubject$.next(user)));
  }
}
