import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersearchService {
  private baseurl ="https://api.github.com"

  constructor(private http:HttpClient)  { 

  }
searchuser(userInput: {}){
  return this.http.get<any>(
    `${this.baseurl}/users/${userInput}`
  )
}
getrepo(userName: {}){
  return this.http.get<any>(
    `${this.baseurl}/users/${userName}/repos`
  )
}
}
