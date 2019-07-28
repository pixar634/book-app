import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { Test2Component } from './test2/test2.component';
import {MatDatepickerModule, MatDatepickerInput} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [TestingComponent, Test2Component],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule

  ],
  exports: [
    TestingComponent
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class TestingModule { }
