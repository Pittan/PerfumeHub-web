import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationListComponent
  },
  {
    path: ':id/edit',
    component: NotificationEditComponent
  },
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
