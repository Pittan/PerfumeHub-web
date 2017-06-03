import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { HeaderService } from './core/header/header.service';


declare global {
  interface Window {
    WebViewJavascriptBridge: any;
    WVJBCallbacks: any;
  }
}

@Component({
  selector: 'ph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private headerService: HeaderService,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private appRef: ApplicationRef) {}

  setupWebViewJavascriptBridge(callback) {
    if (Window.prototype.WebViewJavascriptBridge) { return callback(Window.prototype.WebViewJavascriptBridge); }
    if (Window.prototype.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe); }, 0);
  }

  ngOnInit() {

    this.setupWebViewJavascriptBridge(bridge => {

      // 色の変更を行う
      bridge.registerHandler('setThemeColor', (data, responseCallback) => {
        this.headerService.setColor(data);
        // tickしてビューに反映させる
        this.appRef.tick();
        responseCallback(data);
      });

      // ネイティブにアプリの準備ができたことを伝える
      bridge.callHandler('App Ready', {}, responseData => { });

    });
  }

}
