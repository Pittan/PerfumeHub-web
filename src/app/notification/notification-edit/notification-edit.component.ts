import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../../core/api-base.service';

@Component({
  selector: 'ph-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.styl']
})
export class NotificationEditComponent implements OnInit {

  public notificationType = 'normal';
  public channel = 'all';
  public header: string;
  public body: string;
  public image_url: string;
  public website_url: string;
  public transition = 'PHNewsTransition';

  constructor(private apiBase: ApiBaseService) { }

  ngOnInit() {

  }

  submit() {
    const param = {
      type: this.notificationType,
      title: this.header,
      body: this.body,
      image_url: this.image_url,
      channel: null,
      url: null,
      transition: null
    };

    if (this.channel !== 'all') {
      param.channel = this.channel;
    }

    if (this.notificationType === 'normal') {
      param.url = this.website_url;
    }

    if (this.notificationType === 'pta') {
      param.transition = this.transition;
    }

    if (confirm('送信します。よろしいですか？')) {
      this.apiBase.post('notification/', param)
        .map( res => res.json() )
        .subscribe(
          res => {
            if (res.error_message) {
              alert(res.error_message + '(' + res.error_code + ')');
            } else {
              alert(res.message);
            }
          }
        );
    }

  }
}
