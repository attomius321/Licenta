import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersViewComponent } from './teachers-view.component';
import { TeachersViewRoutingModule } from './teachers-view-routing.module';
import { TeachersViewService } from './services/teachers-view.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TeacherAddComponent } from './panels/teacher-add/teacher-add.component';
import { GenericPanelModule } from 'src/app/components/panels/generic-panel/generic-panel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    TeachersViewComponent,
    TeacherAddComponent
  ],
  imports: [
    CommonModule,
    TeachersViewRoutingModule,
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
    MatMenuModule,
    MatSelectModule
  ],
  providers: [
    TeachersViewService
  ]
})
export class TeachersViewModule { }
