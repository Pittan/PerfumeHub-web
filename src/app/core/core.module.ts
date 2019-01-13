import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiBaseService } from './api-base.service';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from './loading-spinner/loading-spinner.service';
import { NativeBridgeService } from './native-bridge.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    AppMenuComponent,
    LoadingSpinnerComponent
  ],
  declarations: [
    HeaderComponent,
    AppMenuComponent,
    LoadingSpinnerComponent
  ],
  providers: [ApiBaseService, UserService, HeaderService, LoadingSpinnerService, NativeBridgeService]
})
export class CoreModule { }
