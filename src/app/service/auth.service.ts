import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  isAuthenticate(): Observable<boolean> {
    return of(this.isAuthenticated);
  }

  login() {
    // ...
    this.isAuthenticated = true;
  }

  logout() {
    // ...
    this.isAuthenticated = false;
  }
}