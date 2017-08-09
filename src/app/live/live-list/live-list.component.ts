import { Component, OnInit } from '@angular/core';
import { LiveService } from '../live.service';
import { Live } from '../../core/live';
import { LoadingSpinnerService } from '../../core/loading-spinner/loading-spinner.service';

@Component({
  selector: 'ph-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.styl']
})
export class LiveListComponent implements OnInit {

  lives: Live[] = null;

  constructor(private liveService: LiveService,
              private spinner: LoadingSpinnerService) {
    spinner.show();
  }

  ngOnInit() {
    this.liveService.getLiveList().subscribe(data => {
      this.lives = data.lives as Live[];
      this.spinner.hide();
    });
  }

}
