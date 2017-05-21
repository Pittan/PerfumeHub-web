import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';

const routes: Routes = [
  {
    path: 'new',
    component: NotificationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
