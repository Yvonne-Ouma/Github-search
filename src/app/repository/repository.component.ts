import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import { Repository } from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ProfileRequestService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository:Repository;
  repos: any;
  constructor(private profileService:ProfileRequestService) { }

  ngOnInit() {
    this.profileService.repositoryRequest()
    console.log(this.profileService)
    this.repos=this.profileService
    console.log(this.repos)
}
}
