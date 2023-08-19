import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesViewComponent } from './universities-view.component';
import { UniversitiesViewRoutingModule } from './universitites-view-routing.module';


@NgModule({
  declarations: [
    UniversitiesViewComponent
  ],
  imports: [
    CommonModule,
    UniversitiesViewRoutingModule
  ]
})
export class UniversitiesViewModule { }
