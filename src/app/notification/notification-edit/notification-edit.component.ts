import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.styl']
})
export class NotificationEditComponent implements OnInit {

  public notification_type: string;
  public header: string;
  public body: string;
  public website_url: string;
  // public notification_type: string;




  constructor() { }

  ngOnInit() {
  }

}
