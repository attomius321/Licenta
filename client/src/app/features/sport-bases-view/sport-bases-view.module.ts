import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportBasesViewRoutingModule } from './sport-bases-view-routing.module';
import { SportBasesViewComponent } from './sport-bases-view.component';



@NgModule({
  declarations: [
    SportBasesViewComponent
  ],
  imports: [
    CommonModule,
    SportBasesViewRoutingModule
  ]
})
export class SportBasesViewModule { }
