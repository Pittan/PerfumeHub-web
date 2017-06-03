import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { HeaderService } from './core/header/header.service';


declare global {
  interface Window {
    perfumeHub: any;
  }
}

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private headerService: HeaderService, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
  private appRef: ApplicationRef) {}

  ngOnInit() {

    Window.prototype.perfumeHub = {};

    /**
     * テーマカラーを設定する
     * @param color
     */
    Window.prototype.perfumeHub.setThemeColor = (color: string) => {
      this.headerService.setColor(color);
      // tickしてビューに反映させる
      this.appRef.tick();
    };
  }

}
