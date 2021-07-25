import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { UserService } from '../user.service';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  Users!: User;
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService) { 

  }

  ngOnInit() {
    this.searchGit("ngetichnicholas")
 }
searchGit(searchTerm: string){
  this.userHttpService.searchGits(searchTerm).then(
    (success)=>{
      this.Users = this.userHttpService.Users;
    },
    (error)=>{
      console.log(error)
    })
    this.userHttpService.searchRepos(searchTerm).then(
            (success)=>{
            this.Repos=this.userHttpService.Repos
             
             
  
    })
  }
}