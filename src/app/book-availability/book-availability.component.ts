import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-book-availability',
  templateUrl: './book-availability.component.html',
  styleUrls: ['./book-availability.component.css']
})
export class BookAvailabilityComponent implements OnInit {
  
  @Input('selected') selected: any;
 
  constructor() { }

  ngOnInit() {
  }


}
