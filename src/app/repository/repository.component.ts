import { Component, OnInit } from '@angular/core';
// import { RepositoryRequestService } from '../profile-http/profile-request.service';
import { Repository } from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository:Repository;
  constructor() { }

  ngOnInit() {
    // this.profileService.repositoryRequest()
    // this.repository=this.profileService.repository
}
}
