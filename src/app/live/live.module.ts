import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveListComponent } from './live-list/live-list.component';
import { LiveService } from './live.service';
import { LiveDetailComponent } from './live-detail/live-detail.component';
import { SharedModule } from '../shared/shared.module';

import {MdSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LiveRoutingModule,
    SharedModule,
    MdSlideToggleModule
  ],
  declarations: [LiveListComponent, LiveDetailComponent],
  providers: [LiveService]
})
export class LiveModule { }
