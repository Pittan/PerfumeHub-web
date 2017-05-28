import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';
import { Live } from '../../core/live';

@Component({
  selector: 'ph-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.styl']
})
export class LiveListComponent implements OnInit {

  lives: Live[] = null;

  constructor(private liveService: LiveService) { }

  ngOnInit() {

    this.liveService.getLiveList().subscribe(data => {
      console.log(data);
      this.lives = data.lives as Live[];
    });
  }

}
