import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users!: User;
Repos:Repo[]=[]

constructor (private http:HttpClient) { }
searchGits(searchTerm:string){
  interface userInterface{
    login:string,
    avatar_url:any,
    followers:any,
    following:any,
    public_repos: any,
  }
  let urlUser = "https://api.github.com/users/"+searchTerm;
  
  let promise = new Promise((resolve,reject)=>{
    this.http.get<userInterface>(urlUser).toPromise().then(
      (result)=>{
        
       this.Users=result
        console.log(this.Users);
        
        resolve(result)
      },
      (error)=>{
        console.log()
        reject()
      }
    )
  })
  return promise
}
searchRepos(searchTerm:string){
  interface repoInterface{
    name:string,
    description:string,
    html_url:any,
  }

  let urlUser = "https://api.github.com/users/"+ searchTerm +"/repos";

  let promise = new Promise((resolve,reject)=>{
    this.http.get<repoInterface[]>(urlUser).toPromise().then(
      (results)=>{

        this.Repos= [];
        for (let i=0; i<results.length;i++){
          let repo = new Repo(results[i].name,results[i].description,results[i].html_url)
          this.Repos.push(repo);
        }
        console.log(results);
        resolve(results)
      },
      (error)=>{
        console.log()
        reject()
      }
    )
  })
  return promise
}
}
