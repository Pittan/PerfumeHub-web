import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NotificationRoutingModule
  ],
  declarations: [NotificationEditComponent]
})
export class NotificationModule { }
