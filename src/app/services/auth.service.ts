import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registrationStatus: boolean = false;

  setUserRegistered(status: boolean) {
    this.registrationStatus = status;
  }

  isUserRegistered(): boolean {
    return this.registrationStatus;
  }
}

//Since this is a dummy registration app, there's no way to know if user is authenticatd. This service has been developed to have a dummy way of hecking if user is authenticated