import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateJpPipe } from './pipe/date-jp.pipe';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleService } from './schedule.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DateJpPipe,
    HeaderComponent,
    PageNotFoundComponent,
    ScheduleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [HeaderService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
