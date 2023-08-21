import { Component, ViewChild } from '@angular/core';
import { SportBasesViewService } from './services/sport-bases-view.service';
import { DecimalPipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentDTO } from '../students-view/types/students-view.types';
import { CourseLocationDTO } from './types/sport-bases-view.types';

@Component({
  selector: 'app-sport-bases-view',
  templateUrl: './sport-bases-view.component.html',
  styleUrls: ['./sport-bases-view.component.scss']
})
export class SportBasesViewComponent {
  displayedColumns: string[] = ['name', 'address'];
  dataSource!: MatTableDataSource<CourseLocationDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private sportBasesService: SportBasesViewService) { }

  ngOnInit(): void {
    this.sportBasesService.getCourseLocations().subscribe((res: CourseLocationDTO[]) => {
      this.dataSource = new MatTableDataSource<CourseLocationDTO>(res);
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
