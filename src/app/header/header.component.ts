import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'ph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})

export class HeaderComponent implements OnInit {

  public title: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.title.subscribe((val: string) => {
      this.title = val;
    });
  }

}
