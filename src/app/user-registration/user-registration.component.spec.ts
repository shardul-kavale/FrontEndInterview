import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; 
import { UserRegistrationComponent } from './user-registration.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule],
      declarations: [UserRegistrationComponent]
    });
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message for invalid email format', () => {
    component.registrationForm.controls['email'].setValue('wrongEmail');
    component.onSubmit();
    expect(component.registrationForm.controls['email'].errors?.['email']).toBeTruthy();
  });

  it('should show error message for invalid email format', () => {
    component.registrationForm.controls['email'].setValue('wrongEmail');
    component.onSubmit();
    expect(component.registrationForm.controls['email'].errors?.['email']).toBeTruthy();
  });

  it('should show error message for minimum password length', () => {
   
    component.registrationForm.controls['password'].setValue('1234567');
    component.onSubmit();

    expect(component.registrationForm.controls['password'].errors?.['minlength']).toBeTruthy();
  });

});
