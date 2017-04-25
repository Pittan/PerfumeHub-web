import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleCellComponent } from './schedule-cell/schedule-cell.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleService } from './schedule.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScheduleRoutingModule
  ],
  exports: [],
  declarations: [ScheduleCellComponent, ScheduleListComponent],
  providers: [ScheduleService]
})
export class ScheduleModule { }
