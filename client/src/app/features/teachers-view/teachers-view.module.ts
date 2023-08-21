import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersViewComponent } from './teachers-view.component';
import { TeachersViewRoutingModule } from './teachers-view-routing.module';
import { TeachersViewService } from './services/teachers-view.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TeachersViewComponent
  ],
  imports: [
    CommonModule,
    TeachersViewRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    TeachersViewService
  ]
})
export class TeachersViewModule { }
