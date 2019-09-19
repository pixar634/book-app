import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any;
  selected: any;

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.data = data;
    });
  }

  selectedBook($event){
    this.selected= $event;
    console.log("44444444444",$event);
    
  }

  

}
