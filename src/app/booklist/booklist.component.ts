import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

export class BooklistComponent implements OnInit {
  
  @Output() selectedBook = new EventEmitter<any>();
  data: any;
  count:number = 0;
  items: any;


  constructor(private appService: AppService) { }
 

  ngOnInit() {
    this.appService.getData().subscribe(data => {
     this.data = data;
      // console.log("55555555555555",this.data);
    });    
  }
  onClickMe(){
      this.count++;
  }
  onClicksubstract($event){
    if(this.count>0){
    this.count--;
    }    
  }
  showPrice(item){
    console.log(item);
    this.items=item;
      this.selectedBook.emit(this.items);
  }
}
