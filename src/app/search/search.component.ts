import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }
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
  }

}