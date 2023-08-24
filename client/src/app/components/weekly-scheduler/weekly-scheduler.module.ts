import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklySchedulerComponent } from './weekly-scheduler.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        WeeklySchedulerComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        WeeklySchedulerComponent
    ],
})
export class WeeklySchedulerModule { }
