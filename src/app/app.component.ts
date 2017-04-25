import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { HeaderService } from './core/header/header.service';

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private headerService: HeaderService, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}

  ngOnInit() { }

}
