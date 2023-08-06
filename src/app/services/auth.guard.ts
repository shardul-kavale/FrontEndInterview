import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isUserRegistered()) {
      return true; // Allow access to the route if the user is registered
    } else {
      this.router.navigate(['/']); // Redirect to user registration page if not registered
      return false;
    }
  }
}