import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-schedule-view-panel',
  templateUrl: './schedule-view-panel.component.html',
  styleUrls: ['./schedule-view-panel.component.scss']
})
export class ScheduleViewPanelComponent implements OnInit {

  displayedColumns: string[] = ['email', 'lastName', 'firstName', 'universityName', 'year'];
  dataSource!: MatTableDataSource<any>;

  days: any[] = [
    { value: 1, label: 'Luni' },
    { value: 2, label: 'Marti' },
    { value: 3, label: 'Miercuri' },
    { value: 4, label: 'Joi' },
    { value: 5, label: 'Vineri' }
  ]

  constructor(private dialogRef: MatDialogRef<ScheduleViewPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.dataSource = new MatTableDataSource(this.data.students);
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close({ event: 'cancel' })
  }

}
