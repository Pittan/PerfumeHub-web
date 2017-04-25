import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiBaseService } from './api-base.service';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { CookieModule } from 'ngx-cookie';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    CookieModule.forChild()
  ],
  exports: [HeaderComponent, AppMenuComponent],
  declarations: [HeaderComponent, AppMenuComponent],
  providers: [ApiBaseService, UserService, HeaderService]
})
export class CoreModule { }
