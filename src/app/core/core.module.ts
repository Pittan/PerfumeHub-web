import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiBaseService } from './api-base.service';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [ApiBaseService, UserService, HeaderService]
})
export class CoreModule { }
