import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ph-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.styl']
})
export class PageNotFoundComponent implements OnInit {

  public appVersion = environment.version;

  constructor() { }

  ngOnInit() {
  }

}
