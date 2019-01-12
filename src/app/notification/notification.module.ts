import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';
import { FormsModule } from '@angular/forms';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotificationRoutingModule,
    SharedModule
  ],
  declarations: [NotificationEditComponent, NotificationListComponent]
})
export class NotificationModule { }
