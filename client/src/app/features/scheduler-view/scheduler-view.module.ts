import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerViewComponent } from './scheduler-view.component';
import { SchedulerViewRoutingModule } from './scheduler-view-routing.module';



@NgModule({
  declarations: [
    SchedulerViewComponent
  ],
  imports: [
    CommonModule,
    SchedulerViewRoutingModule
  ]
})
export class SchedulerViewModule { }
