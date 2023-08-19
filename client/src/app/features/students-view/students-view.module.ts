import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsViewComponent } from './students-view.component';
import { StudentsViewRoutingModule } from './students-view-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    StudentsViewComponent
  ],
  imports: [
    CommonModule,
    StudentsViewRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class StudentsViewModule { }
