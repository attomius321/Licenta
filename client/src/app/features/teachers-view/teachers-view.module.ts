import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersViewComponent } from './teachers-view.component';
import { TeachersViewRoutingModule } from './teachers-view-routing.module';



@NgModule({
  declarations: [
    TeachersViewComponent
  ],
  imports: [
    CommonModule,
    TeachersViewRoutingModule
  ]
})
export class TeachersViewModule { }
