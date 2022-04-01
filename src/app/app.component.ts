import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  percent = '-0.4%';
  title = 'test-project';
  constructor(){}
  ngOnInit(): void {
  }


}
