import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesViewComponent } from './universities-view.component';
import { UniversitiesViewRoutingModule } from './universitites-view-routing.module';
import { UniversitiesViewService } from './services/universities-view.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    UniversitiesViewComponent
  ],
  imports: [
    CommonModule,
    UniversitiesViewRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    UniversitiesViewService
  ]
})
export class UniversitiesViewModule { }
