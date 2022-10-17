import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [UserProfileComponent, TaskComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
