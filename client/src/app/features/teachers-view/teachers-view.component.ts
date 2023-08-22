import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsViewService } from '../students-view/services/students-view.service';
import { StudentDTO } from '../students-view/types/students-view.types';
import { TeachersViewService } from './services/teachers-view.service';
import { UniversityDTO } from '../universities-view/types/universities-view.types';
import { TeacherDTO } from './types/teachers-view.types';
import { SelectionModel } from '@angular/cdk/collections';
import { TeacherAddComponent } from './panels/teacher-add/teacher-add.component';
import { GenericPanelComponent } from 'src/app/components/panels/generic-panel/generic-panel.component';
import { MatDialog } from '@angular/material/dialog';
import { tap, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-teachers-view',
  templateUrl: './teachers-view.component.html',
  styleUrls: ['./teachers-view.component.scss']
})
export class TeachersViewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'firstName', 'lastName', 'email', 'universityName', 'actions'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<TeacherDTO>(true, []);

  public isAllSelected() {
    const numSelected = this.selection?.selected?.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  public toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private teachersViewService: TeachersViewService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshData();
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = "Iteme pe pagina";
    this.paginator._intl.firstPageLabel = "Prima pagina";
    this.paginator._intl.lastPageLabel = "Ultima pagina";
    this.paginator._intl.nextPageLabel = "Urmatoarea pagina";
    this.paginator._intl.previousPageLabel = "Pagina anterioara";
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const start = page * pageSize + 1;
      const end = (page + 1) * pageSize;
      return `${start} - ${end} din ${this.decimalPipe.transform(length)}`;
    };
  }

  public getUniversities(universities: UniversityDTO[]) {
    return universities.map((university: UniversityDTO) => university.name).join(', ');
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(TeacherAddComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.teachersViewService.createTeacher(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    });
  }

  openEditDialog(courseLocation: TeacherDTO): void {
    const dialogRef = this.dialog.open(TeacherAddComponent, {
      data: courseLocation
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.teachersViewService.updateTeacher(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    })
  }

  public openDeleteDialog(teacher?: TeacherDTO): void {
    const dialogRef = this.dialog.open(GenericPanelComponent, {
      data: {
        title: 'Stergere Cadre Didactice',
        content: [
          'Urmeaza sa stergeti urmatoarele cadre didactice: ' + (() => teacher?.id ? teacher?.firstName + ' ' + teacher?.lastName : this.selection.selected.map((selection: TeacherDTO) => selection.firstName + ' ' + selection.lastName).join(', '))() + '.',
          'Doriti sa continuati?'
        ]
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.teachersViewService.deleteTeacher(teacher?.id ? [teacher?.id] : this.selection.selected.map((selection: TeacherDTO) => selection.id))
          .pipe(
            tap(() => this.refreshData()),
            catchError(err => throwError(() => err))
          )
          .subscribe();
      }
    });

  }

  private refreshData(): void {
    this.teachersViewService.getTeachers().subscribe((res: TeacherDTO[]) => {
      this.dataSource = new MatTableDataSource<TeacherDTO>(res);
      this.dataSource.paginator = this.paginator;
      this.selection = new SelectionModel<TeacherDTO>(true, [])
    });
  }

  public isDeleteDisabled() {
    return this.selection.selected.length === 0;
  }
}
