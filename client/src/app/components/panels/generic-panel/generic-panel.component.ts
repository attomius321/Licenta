import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-panel',
  templateUrl: './generic-panel.component.html',
  styleUrls: ['./generic-panel.component.scss']
})
export class GenericPanelComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<GenericPanelComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close({ event: 'cancel' })
  }

  public save() {
    this.dialogRef.close({ event: 'save' });
  }

}
