import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPerfumeHubComponent } from './about-perfume-hub/about-perfume-hub.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutPerfumeHubComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
