import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.setTitle('PerfumeHub');
  }

}
