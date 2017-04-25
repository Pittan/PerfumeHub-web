import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../core/header/header.service';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'ph-about-perfume-hub',
  templateUrl: './about-perfume-hub.component.html',
  styleUrls: ['./about-perfume-hub.component.styl']
})
export class AboutPerfumeHubComponent implements OnInit {

  public appVersion: string;
  public nativeAppVersion: string = null;

  constructor(private headerService: HeaderService,
              private titleService: Title) { }

  ngOnInit() {
    this.appVersion = environment.version;
    this.titleService.setTitle('About PerfumeHub');

    // ネイティブ連携とかするようになれば以下みたいな感じで
    // this.nativeAppVersion = 'PerfumeHub-iOS 4.1.0';

  }

}
