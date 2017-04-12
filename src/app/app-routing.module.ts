import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPerfumeHubComponent } from './about-perfume-hub/about-perfume-hub.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutPerfumeHubComponent
  },
  {
    path: 'schedule',
    component: ScheduleListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
