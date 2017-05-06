import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveListComponent } from './live-list/live-list.component';
import { LiveService } from './live.service';
import { LiveDetailComponent } from './live-detail/live-detail.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LiveRoutingModule,
    AgmCoreModule,
    SharedModule
  ],
  declarations: [LiveListComponent, LiveDetailComponent],
  providers: [LiveService]
})
export class LiveModule { }
