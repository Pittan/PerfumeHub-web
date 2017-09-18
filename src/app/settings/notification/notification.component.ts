import { Component, OnInit } from '@angular/core';
import { NativeBridgeService } from '../../core/native-bridge.service';

import * as _ from 'lodash';

interface Channel {
  name?: string;
  description?: string;
  channel: string;
  subscribed?: boolean;
}

@Component({
  selector: 'ph-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.styl']
})
export class NotificationComponent implements OnInit {

  public channels: Channel[] = [];
  public isApp: boolean = null;

  constructor(private nativeBridge: NativeBridgeService) { }

  ngOnInit() {

    // TODO サーバにチャンネルを問い合わせる(channelAPIが存在しないのでとりあえず決め打ち)
    this.channels = [
      {
        name: 'ニュース通知',
        description: '公式ニュースの更新をお知らせします。',
        channel: 'news',
        subscribed: false
      },
      {
        name: 'P.T.A.新着通知',
        description: 'P.T.A.の更新をお知らせします。',
        channel: 'pta',
        subscribed: false
      },
      {
        name: '作者の気まぐれ',
        description: '作者が気まぐれで送る通知など。',
        channel: 'author',
        subscribed: false
      },
      {
        name: '今日のPerfume',
        description: '毎朝その日のPerfumeメディア出演情報などをお知らせします。',
        channel: 'today',
        subscribed: false
      }
    ];
    this.isApp = this.nativeBridge.isApp();

    // ネイティブアプリでしか通知の設定はできない
    if (!this.isApp) {
      return;
    }

    // ネイティブが購読しているチャンネルを取得してスイッチをオンにする
    this.nativeBridge.callHandler('getSubscribedChannel', null, responseData => {
      const channels = JSON.parse(responseData);
      channels.forEach(channel => {
        const enabledChannel = _.find(this.channels, {'channel': channel});
        if (enabledChannel) {
          enabledChannel.subscribed = true;
        }
      });
    });

  }

  notificationChange(event, channel: Channel) {
    setTimeout(() => {
      this.updateNotification();
    }, 200);
  }

  updateNotification() {
    const subscription: string[] = [];
    this.channels.forEach(ch => {
      if (ch.subscribed) {
        subscription.push(ch.channel);
      }
    });

    this.nativeBridge.callHandler('setSubscribedChannel', subscription, response => {
      console.log(response);
    });
  }

}
