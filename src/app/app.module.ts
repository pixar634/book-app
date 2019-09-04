import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { NavComponent } from './nav/nav.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookAvailabilityComponent } from './book-availability/book-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooklistComponent,
    BookAvailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
