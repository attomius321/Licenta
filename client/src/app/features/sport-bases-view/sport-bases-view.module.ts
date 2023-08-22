import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportBasesViewRoutingModule } from './sport-bases-view-routing.module';
import { SportBasesViewComponent } from './sport-bases-view.component';
import { SportBasesViewService } from './services/sport-bases-view.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SportBaseAddComponent } from './panels/sport-base-add/sport-base-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GenericPanelModule } from 'src/app/components/panels/generic-panel/generic-panel.module';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    SportBasesViewComponent,
    SportBaseAddComponent
  ],
  imports: [
    CommonModule,
    SportBasesViewRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GenericPanelModule,
    MatMenuModule
  ],
  providers: [
    SportBasesViewService
  ]
})
export class SportBasesViewModule { }
