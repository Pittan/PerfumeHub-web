import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UiSwitchModule,
    FormsModule
  ],
  declarations: [IndexComponent, NotificationComponent]
})
export class SettingsModule { }
