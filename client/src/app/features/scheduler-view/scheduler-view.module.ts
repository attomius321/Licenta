import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerViewComponent } from './scheduler-view.component';
import { SchedulerViewRoutingModule } from './scheduler-view-routing.module';
import { WeeklySchedulerModule } from 'src/app/components/weekly-scheduler/weekly-scheduler.module';



@NgModule({
  declarations: [
    SchedulerViewComponent
  ],
  imports: [
    CommonModule,
    SchedulerViewRoutingModule,
    WeeklySchedulerModule
  ]
})
export class SchedulerViewModule { }
