import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsViewComponent } from './students-view.component';
import { StudentsViewRoutingModule } from './students-view-routing.module';



@NgModule({
  declarations: [
    StudentsViewComponent
  ],
  imports: [
    CommonModule,
    StudentsViewRoutingModule
  ]
})
export class StudentsViewModule { }
