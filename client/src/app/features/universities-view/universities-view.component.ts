import { Component, ViewChild } from '@angular/core';
import { UniversityDTO } from './types/universities-view.types';
import { UniversitiesViewService } from './services/universities-view.service';
import { DecimalPipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-universities-view',
  templateUrl: './universities-view.component.html',
  styleUrls: ['./universities-view.component.scss']
})
export class UniversitiesViewComponent {
  displayedColumns: string[] = ['name', 'address'];
  dataSource!: MatTableDataSource<UniversityDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  decimalPipe = new DecimalPipe(navigator.language);

  constructor(private universityViewService: UniversitiesViewService) { }

  ngOnInit(): void {
    this.universityViewService.getUniversities().subscribe((res: UniversityDTO[]) => {
      this.dataSource = new MatTableDataSource<UniversityDTO>(res);
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
