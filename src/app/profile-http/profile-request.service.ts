import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
// import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})

export class ProfileRequestService {
  profile:User;
  

 constructor(private http: HttpClient) { 
   this.profile= new User("","",);
   // this.repository= new Repository("","");
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

// export class RepositoryRequestService{
//   repository: Repository;
//   constructor(private http: HttpClient) { 
//     this.repository= new Repository("","");
//   }
//   repositoryRequest(){
//     interface ApiResponse{
//       repos_url: string,
//       node_id: string
      
//     }
//     let promise = new Promise((resolve,reject)=>{
//       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
//         this.repository.repos_url= response.repos_url
//         this.repository.node_id = response.node_id
        

//         resolve()
//       },
//       error=>{
//         this.repository.repos_url="You can do it!! Don't give up."
//         this.repository.node_id="Sorry!! Keep trying"
//         reject(error)
//       }
//     )
//     })
//     return promise
//   }
// }
