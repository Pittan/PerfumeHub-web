import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiBaseService } from './api-base.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [ApiBaseService]
})
export class CoreModule { }
