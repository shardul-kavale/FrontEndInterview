import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get user registration status', () => {
    //initial value od registrationStatus is false
    expect(service.isUserRegistered()).toBeFalsy();
    service.setUserRegistered(true);
    expect(service.isUserRegistered()).toBeTruthy();
  });

  
});
