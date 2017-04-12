import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPerfumeHubComponent } from './about-perfume-hub/about-perfume-hub.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleCellComponent } from './schedule-cell/schedule-cell.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ScheduleListComponent,
    AboutPerfumeHubComponent,
    AdminComponent,
    ScheduleCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
