import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklySchedulerComponent } from './weekly-scheduler.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        WeeklySchedulerComponent
    ],
    imports: [
        CommonModule,
        DragDropModule
    ],
    exports: [
        WeeklySchedulerComponent
    ]
})
export class WeeklySchedulerModule { }
