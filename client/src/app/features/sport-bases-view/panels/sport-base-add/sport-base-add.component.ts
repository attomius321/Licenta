import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sport-base-add',
  templateUrl: './sport-base-add.component.html',
  styleUrls: ['./sport-base-add.component.scss']
})
export class SportBaseAddComponent implements OnInit {

  public sportBaseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SportBaseAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.sportBaseForm = this.formBuilder.group({
      name: [this.data?.name ? this.data?.name : '', [Validators.required]],
      address: [this.data?.address ? this.data?.address : '']
    })
  }

  public close() {
    this.dialogRef.close({ event: 'cancel' })
  }

  public save() {
    this.dialogRef.close({ event: 'save', data: this.data?.id ? { id: this.data?.id, ...this.sportBaseForm.getRawValue() } : this.sportBaseForm.getRawValue() });
  }

}
