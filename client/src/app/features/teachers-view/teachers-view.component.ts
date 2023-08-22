import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsViewService } from '../students-view/services/students-view.service';
import { StudentDTO } from '../students-view/types/students-view.types';
import { TeachersViewService } from './services/teachers-view.service';
import { UniversityDTO } from '../universities-view/types/universities-view.types';

@Component({
  selector: 'app-teachers-view',
  templateUrl: './teachers-view.component.html',
  styleUrls: ['./teachers-view.component.scss']
})
export class TeachersViewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'universityName'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private teachersViewService: TeachersViewService) { }

  ngOnInit(): void {
    this.teachersViewService.getTeachers().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res);
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

  public getUniversities(universities: UniversityDTO[]) {
    return universities.map((university: UniversityDTO) => university.name).join(', ');
  }
}
