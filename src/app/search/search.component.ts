import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersearchService } from '../usersearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() emitSearch = new EventEmitter<any>()
@Output() isRepo= new EventEmitter<any>()

username="";

searchTerm:string;

form = new FormGroup ({
  userInput: new FormControl('')
})
  constructor(private searchservice:UsersearchService, private router:Router) { }
search(event:any){
  this.username = event.target.value
  this.emitSearch.emit(this.username)
  console.log(this.username)
}
  ngOnInit() {
  }
  searchuser() {
  let userInput=this.form.value
  console.log(userInput)
  this.searchservice.searchuser(userInput.userInput).subscribe((response)=>{
    console.log(response)
    this.router.navigateByUrl(`git/${response.login}`)
  }, 
  (err) =>{
    console.log(err)
  }
  )
  }

}