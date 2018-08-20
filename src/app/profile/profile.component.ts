import { Component, OnInit } from '@angular/core';
import { ProfileRequestService} from '../profile-http/profile-request.service'
import { User} from '../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ProfileRequestService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profile:User;
  constructor(private profileService:ProfileRequestService) { }

  ngOnInit() {
    this.profileService.profileRequest()
    this.profile=this.profileService.profile
    console.log(this.profile)
  }

}
