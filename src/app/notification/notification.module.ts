import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';
import { FormsModule } from '@angular/forms';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotificationRoutingModule
  ],
  declarations: [NotificationEditComponent, NotificationListComponent]
})
export class NotificationModule { }
