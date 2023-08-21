import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsViewService } from './services/students-view.service';
import { StudentDTO } from './types/students-view.types';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss']
})
export class StudentsViewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'universityName', 'year'];
  dataSource!: MatTableDataSource<StudentDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private studentsViewService: StudentsViewService) { }

  ngOnInit(): void {
    this.studentsViewService.getStudents().subscribe(res => {
      this.dataSource = new MatTableDataSource<StudentDTO>(res);
      this.dataSource.paginator = this.paginator;
    });
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
}
