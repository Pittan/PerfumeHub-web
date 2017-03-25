import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../schedule.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'ph-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.styl']
})
export class ScheduleListComponent implements OnInit {

  public schedules: Schedule[] = [];
  public date: Date;
  public loading = true;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.date = new Date();
    this.scheduleService.fetchSchedule().subscribe(
      data => {
        this.loading = false;
        this.schedules = data;
      }
    );
  }

}