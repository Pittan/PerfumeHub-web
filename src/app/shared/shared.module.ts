import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateParsePipe } from './date-parse.pipe';
import { DateJpPipe } from './date-jp.pipe';
import { OneColumnContainerComponent } from './one-column-container/one-column-container.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DateJpPipe,
    DateParsePipe,
    OneColumnContainerComponent
  ],
  declarations: [
    DateJpPipe,
    DateParsePipe,
    OneColumnContainerComponent
  ]
})
export class SharedModule { }
