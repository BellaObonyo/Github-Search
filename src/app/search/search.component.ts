import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }
search(event:any){
  this.username = event.target.value
  this.emitSearch.emit(this.username)
  console.log(this.username)
}
  ngOnInit() {
  }

}