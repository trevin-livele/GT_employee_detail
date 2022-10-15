import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule

  ]
})
export class DashboardModule { }
