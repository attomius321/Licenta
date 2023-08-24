import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerViewComponent } from './scheduler-view.component';
import { SchedulerViewRoutingModule } from './scheduler-view-routing.module';
import { WeeklySchedulerModule } from 'src/app/components/weekly-scheduler/weekly-scheduler.module';
import { SchedulerViewService } from './services/scheduler-view.service';
import { SchedulerViewAddComponent } from './panels/scheduler-view-add/scheduler-view-add.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    SchedulerViewComponent,
    SchedulerViewAddComponent
  ],
  imports: [
    CommonModule,
    SchedulerViewRoutingModule,
    WeeklySchedulerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    SchedulerViewService
  ]
})
export class SchedulerViewModule { }
