import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { CoreModule } from './core/core.module';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPerfumeHubComponent } from './about-perfume-hub/about-perfume-hub.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleCellComponent } from './schedule-cell/schedule-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ScheduleListComponent,
    AboutPerfumeHubComponent,
    AdminComponent,
    ScheduleCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    CoreModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
