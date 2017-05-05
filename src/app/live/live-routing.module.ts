import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveListComponent } from './live-list/live-list.component';
import { LiveDetailComponent } from './live-detail/live-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LiveListComponent
  },
  {
    path: ':id',
    component: LiveDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
