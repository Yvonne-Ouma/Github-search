import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Repository} from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository:Repository;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
    repos_url
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Yvonne-Ouma?access_token=dd771b778e77eb12650450ca8f81a81a7764d1b9").subscribe(information =>{
      this.repository= new Repository(information.repos_url)
    })
  }

}
