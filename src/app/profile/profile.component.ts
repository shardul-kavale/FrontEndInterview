import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profileData.interface';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile={name:'',email:'',bio:'', img: ''}

  constructor(private router: Router){}
  ngOnInit() {

    axios.get<Profile>('https://mocki.io/v1/2fd68b03-cb64-4f55-9db9-497819cdc548')
      .then((response) => {
        this.profile = response.data;
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }

  goBack(){
   this.router.navigate(['/']);
  }

}
