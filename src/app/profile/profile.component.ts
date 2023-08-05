import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profileData.interface';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile={name:'',email:'',bio:''}

  ngOnInit() {

    axios.get<Profile>('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2')
      .then((response) => {
        this.profile = response.data;
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }

}
