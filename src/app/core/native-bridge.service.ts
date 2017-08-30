import { Injectable } from '@angular/core';

declare global {
  interface Window {
    WebViewJavascriptBridge: any;
    WVJBCallbacks: any;
  }
}

@Injectable()
export class NativeBridgeService {

  private bridge: any = {};

  private callQueue = [];
  private handlerQueue = [];

  constructor() {

    // When using PC Chrome (For development) or
    // using normal browsers (e.g. Safari) mock native bridge functions.
    if (window.navigator.userAgent.indexOf('PerfumeHubDev') !== -1 || !this.isApp()) {
      this.bridge.callHandler = (name, data, responseCallback) => {
        console.log('Native call:' + name, data);
      };
      this.bridge.registerHandler = (name, callback) => {
        console.log('Register handler: ' + name);
      };
      return;
    }

    this.setupWebViewJavascriptBridge(bridge => {
      this.bridge = bridge;

      // Tell native WebView that Angular is ready
      bridge.callHandler('App Ready', {});

      // When call or handle function has called during init,
      // Flush them when bridge is ready.
      if (this.handlerQueue.length > 0 || this.callQueue.length > 0) {
        this.flush();
      }
    });
  }

  /**
   * Check WebView that is in-app WebView or Safari/Chrome
   * @returns {boolean}
   */
  isApp() {
    return window.navigator.userAgent.indexOf('PerfumeHub') !== -1;
  }

  /**
   * Call native WebView
   * @param name
   * @param data
   * @param callback
   * @usage
   *   service.callHandler('ObjC Echo', {'key': 'value'}, function responseCallback(responseData) {
   *     console.log('JS received response:', responseData);
   *   });
   */
  callHandler(name: string, data: any, callback?) {
    // When bridge is not ready, push into queue.
    if (!(this.bridge || {}).callHandler) {
      this.callQueue.push({name: name, data: data, callback: callback});
      return;
    }
    this.bridge.callHandler(name, data, callback);
  }

  /**
   * Register handler
   * @param name
   * @param callback
   *
   * @usage
   *   service.registerHandler('JS Echo', function (data, responseCallback){
   *     console.log('JS Echo called with:', data);
   *     responseCallback(data);
   *   });
   */
  registerHandler(name: string, callback) {
    // When bridge is not ready, push into queue.
    if (!(this.bridge || {}).registerHandler) {
      this.handlerQueue.push({name: name, callback: callback});
      return;
    }
    this.bridge.registerHandler(name, callback);
  }

  /**
   * Flush queue
   */
  private flush() {
    this.callQueue.forEach(call => {
      this.callHandler(call.name, call.data, call.callback);
    });
    this.callQueue = [];
    this.handlerQueue.forEach(handler => {
      this.registerHandler(handler.name, handler.callback);
    });
    this.handlerQueue = [];
  }

  /**
   * Set up native-web bridge
   * from https://github.com/marcuswestin/WebViewJavascriptBridge
   * @param callback
   * @returns {any}
   */
  private setupWebViewJavascriptBridge(callback) {
    if (Window.prototype.WebViewJavascriptBridge) { return callback(Window.prototype.WebViewJavascriptBridge); }
    if (Window.prototype.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe); }, 0);
  }
}
