import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateParsePipe } from './date-parse.pipe';
import { DateJpPipe } from './date-jp.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DateJpPipe,
    DateParsePipe
  ],
  declarations: [
    DateJpPipe,
    DateParsePipe
  ]
})
export class SharedModule { }
