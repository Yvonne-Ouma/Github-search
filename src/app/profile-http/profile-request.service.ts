import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { User } from '../user';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})

export class ProfileRequestService {
  profile:User;
  repository: Repository;
  repos: any;
  

 constructor(private http: HttpClient) { 
   this.profile= new User("","");
   this.repository = new Repository("","");
 }
 profileRequest()
 {
   interface ApiResponse{
     avatar_url: any;
     login: string
     
   }
   let promise = new Promise((resolve,reject)=>{
     this.http.get<ApiResponse>("https://api.github.com/users/Yvonne-Ouma?access_token="+environment.apiUrl).toPromise().then(response=>{
       this.profile.avatar_url= response.avatar_url
       this.profile.login = response.login
console.log(response)       

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
 
  repositoryRequest(){
        interface ApiResponse{
          repos_url: string
          node_id: string
          
        }
        let promise = new Promise((resolve,reject)=>{
          this.http.get<ApiResponse>("https://api.github.com/users/Yvonne-Ouma/repos?access_token=" + environment.apiUrl).toPromise().then(response=>{
            this.repos= response
            console.log(response)
    
            resolve()
          },
          error=>{
            
           reject(error)
           }
          )
          })
        return promise
 }
 }
 


