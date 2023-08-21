import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklySchedulerComponent } from './weekly-scheduler.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ColorGeneratorService } from './services/color-generator.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        WeeklySchedulerComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        MatCardModule
    ],
    exports: [
        WeeklySchedulerComponent
    ],
    providers: [
        ColorGeneratorService
    ]
})
export class WeeklySchedulerModule { }
