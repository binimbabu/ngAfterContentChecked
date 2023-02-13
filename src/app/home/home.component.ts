import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentChecked(){
    console.log("after content checked")
  }
  clickMe(){
    console.log("link clicked")
  }
}
