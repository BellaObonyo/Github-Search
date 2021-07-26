import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { UserService } from '../user.service';
import { UsersearchService } from '../usersearch.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  Users!: User;
  user:any
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService, private searchservice:UsersearchService, private activatedR:ActivatedRoute) { 

  }

  ngOnInit() {
    this.getuser()
    this.getuserrepos()
    this.searchGit("ObonyoCynthia")
 }
 getuser() {
   let userName =this.activatedR.snapshot.params.user
   this.searchservice.searchuser(userName).subscribe((res)=>{
     this.user=res 
   })

 }
 getuserrepos() {
  let userName =this.activatedR.snapshot.params.user
  this.searchservice.getrepo(userName).subscribe((res)=>{
    this.Repos=res
  })
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