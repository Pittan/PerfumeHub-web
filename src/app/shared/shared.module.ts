import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateParsePipe } from './date-parse.pipe';
import { DateJpPipe } from './date-jp.pipe';
import { OneColumnContainerComponent } from './one-column-container/one-column-container.component';
import { TwoColumnContainerComponent } from './two-column-container/two-column-container.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DateJpPipe,
    DateParsePipe,
    OneColumnContainerComponent,
    TwoColumnContainerComponent
  ],
  declarations: [
    DateJpPipe,
    DateParsePipe,
    OneColumnContainerComponent,
    TwoColumnContainerComponent
  ]
})
export class SharedModule { }
