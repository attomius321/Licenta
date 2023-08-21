import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportBasesViewRoutingModule } from './sport-bases-view-routing.module';
import { SportBasesViewComponent } from './sport-bases-view.component';
import { SportBasesViewService } from './services/sport-bases-view.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    SportBasesViewComponent
  ],
  imports: [
    CommonModule,
    SportBasesViewRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    SportBasesViewService
  ]
})
export class SportBasesViewModule { }
