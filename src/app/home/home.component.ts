import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Users!: User;
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService) { 

  }

  ngOnInit() {
    this.searchGit("ObonyoCynthia")
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
