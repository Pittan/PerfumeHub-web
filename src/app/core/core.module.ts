import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiBaseService } from './api-base.service';
import { UserService } from './user.service';
import { ScheduleService } from './schedule.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [ApiBaseService, UserService, ScheduleService]
})
export class CoreModule { }
