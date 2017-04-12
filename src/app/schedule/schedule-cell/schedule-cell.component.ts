import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../schedule';

@Component({
  selector: 'ph-schedule-cell',
  templateUrl: './schedule-cell.component.html',
  styleUrls: ['./schedule-cell.component.styl']
})


export class ScheduleCellComponent implements OnInit {

  @Input() schedule: Schedule;

  constructor() { }

  ngOnInit() {
  }

}
