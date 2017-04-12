import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../core/schedule.service';
import { Schedule } from '../core/schedule';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ph-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.styl']
})
export class ScheduleListComponent implements OnInit {

  public schedules: Schedule[] = [];
  public date: Date;
  public loading = true;

  constructor(private scheduleService: ScheduleService,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('今日のPerfume');
    this.date = new Date();
    this.scheduleService.fetchScheduleList().subscribe(
      data => {
        this.loading = false;
        this.schedules = data;
      }
    );

    //
    // this.scheduleService.postSchedule().subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

}
