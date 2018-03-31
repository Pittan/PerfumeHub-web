import { ApplicationRef, Component, OnInit } from '@angular/core';
import { HeaderService } from './core/header/header.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { NativeBridgeService } from './core/native-bridge.service';

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private headerService: HeaderService,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private appRef: ApplicationRef,
              private nativeBridge: NativeBridgeService) {}

  ngOnInit() {
    if (this.nativeBridge.isApp()) {
      this.nativeBridge.registerHandler('setThemeColor', (data, callback) => { this.setThemeColor(data, callback) });

      // アプリ側にWebの準備ができたことを伝える
      this.nativeBridge.callHandler('AppReady', {}, responseData => {});
    }
  }

  /**
   * テーマカラーの変更を行います
   * @param data
   * @param responseCallback
   */
  setThemeColor(data: string, responseCallback: (callbackData) => {}) {
    this.headerService.setColor(data);
    // tickしてAngularのCDを動かす
    this.appRef.tick();
    // エコーバック
    responseCallback(data);
  }

}
