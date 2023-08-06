import { Component } from '@angular/core';
import axios from 'axios';
import { UserRegistration } from '../models/registration.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;
  user: UserRegistration = {
    name: '',
    email: '',
    password: '',
    bio: ''
  };
  registrationError: string = '';
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      bio: ['', [Validators.required,Validators.minLength(20)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {// Form is valid proceed with registration process

      /*PLEASE NOTE: This should be a POST request and we should send this.user as request 
      body, however the url provided ony accepts GET requests:*/
      axios
      .get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d')
      .then((response: any) => {
        if (response.data.success) {
          console.log('Registration successful!');
          this.router.navigate(['/profile']);
        } else {      
          this.registrationError = 'Registration failed. Please try again later.';
        }
      })
      .catch((error: any) => {
        console.error('Error registering user:', error);
      });

    }else{// Form is invalid, display validation errors
      this.registrationForm.markAllAsTouched();
    }
    
  }
}
