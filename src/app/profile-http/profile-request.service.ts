import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user'


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
   profile:User;
  constructor(private http: HttpClient) { 
    this.profile= new User("","",);
  }
  profileRequest(){
    interface ApiResponse{
      avatar_url: any;
      login: string
      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.profile.avatar_url= response.avatar_url
        this.profile.login = response.login
        

        resolve()
      },
      error=>{
        this.profile.avatar_url="Dont worry, keep trying."
        this.profile.login="Sorry!! try again"
        reject(error)
      }
    )
    })
    return promise
  }
}
