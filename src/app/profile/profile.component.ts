import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Profile} from '../profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile:Profile;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      avatar_url
      login
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Yvonne-Ouma?access_token=dd771b778e77eb12650450ca8f81a81a7764d1b9").subscribe(information =>{
      this.profile= new Profile(information.avatar_url, information.login)
    })
  }

}