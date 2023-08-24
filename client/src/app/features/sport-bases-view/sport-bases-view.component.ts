import { Component, ViewChild } from '@angular/core';
import { SportBasesViewService } from './services/sport-bases-view.service';
import { DecimalPipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDTO } from '../students-view/types/students-view.types';
import { CourseLocationDTO } from './types/sport-bases-view.types';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { SportBaseAddComponent } from './panels/sport-base-add/sport-base-add.component';
import { catchError, tap, throwError } from 'rxjs';
import { GenericPanelComponent } from 'src/app/components/panels/generic-panel/generic-panel.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-sport-bases-view',
  templateUrl: './sport-bases-view.component.html',
  styleUrls: ['./sport-bases-view.component.scss']
})
export class SportBasesViewComponent {
  displayedColumns: string[] = [...this.isUserAdmin() ? ['select'] : [], 'name', 'address', ...this.isUserAdmin() ? ['actions'] : []];
  dataSource!: MatTableDataSource<CourseLocationDTO>;
  selection = new SelectionModel<CourseLocationDTO>(true, []);

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

  constructor(private sportBasesService: SportBasesViewService, public dialog: MatDialog, private tokenService: TokenStorageService) { }

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

  public isUserAdmin() {
    return this.tokenService.isUserAdmin();
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(SportBaseAddComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.sportBasesService.createCourseLocation(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    });
  }

  openEditDialog(courseLocation: CourseLocationDTO): void {
    const dialogRef = this.dialog.open(SportBaseAddComponent, {
      data: courseLocation
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.sportBasesService.updateCourseLocation(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    })
  }

  public openDeleteDialog(courseLocation?: CourseLocationDTO): void {
    const dialogRef = this.dialog.open(GenericPanelComponent, {
      data: {
        title: 'Stergere Baze Sportive',
        content: [
          'Urmeaza sa stergeti urmatoarele baze sportive: ' + (() => courseLocation?.id ? courseLocation?.name : this.selection.selected.map((selection: CourseLocationDTO) => selection.name).join(', '))() + '.',
          'Doriti sa continuati?'
        ]
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.sportBasesService.deleteCourseLocation(courseLocation?.id ? [courseLocation?.id] : this.selection.selected.map((selection: CourseLocationDTO) => selection.id))
          .pipe(
            tap(() => this.refreshData()),
            catchError(err => throwError(() => err))
          )
          .subscribe();
      }
    });
  }

  private refreshData(): void {
    this.sportBasesService.getCourseLocations().subscribe((res: CourseLocationDTO[]) => {
      this.dataSource = new MatTableDataSource<CourseLocationDTO>(res);
      this.dataSource.paginator = this.paginator;
      this.selection = new SelectionModel<CourseLocationDTO>(true, [])
    });
  }

  public isDeleteDisabled() {
    return this.selection.selected.length === 0;
  }

}
