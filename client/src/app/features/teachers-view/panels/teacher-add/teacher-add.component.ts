import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeachersViewService } from '../../services/teachers-view.service';
import { UniversityDTO } from 'src/app/features/universities-view/types/universities-view.types';
import { Observable } from 'rxjs';
import { CourseDTO } from '../../types/teachers-view.types';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent {
  public teacherForm!: FormGroup;
  universities!: Observable<UniversityDTO[]>;
  courses!: Observable<CourseDTO[]>;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TeacherAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private teacherService: TeachersViewService) { }

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstName: [this.data?.firstName ? this.data?.firstName : ''],
      lastName: [this.data?.lastName ? this.data?.lastName : '', [Validators.required]],
      email: [{ value: this.data?.email ? this.data?.email : '', disabled: this.data?.id }, [Validators.required, Validators.email]],
      universities: [this.data?.universities ? this.data?.universities : '', [Validators.required]],
      courses: [this.data?.courses ? this.data?.courses : '', [Validators.required]]
    })

    this.universities = this.teacherService.getUniversities();
    this.courses = this.teacherService.getCourses();
  }

  public compareWithFn(item1: any, item2: any): boolean {
    return item1.id === item2.id;
  }

  public close() {
    this.dialogRef.close({ event: 'cancel' })
  }

  public save() {
    this.dialogRef.close({ event: 'save', data: this.data?.id ? { id: this.data?.id, ...this.teacherForm.getRawValue() } : this.teacherForm.getRawValue() });
  }
}
