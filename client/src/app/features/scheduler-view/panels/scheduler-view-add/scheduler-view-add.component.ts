import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SchedulerViewService } from '../../services/scheduler-view.service';
import { CourseDTO, TeacherDTO } from 'src/app/features/teachers-view/types/teachers-view.types';
import { Observable } from 'rxjs';
import { CourseLocationDTO } from 'src/app/features/sport-bases-view/types/sport-bases-view.types';

@Component({
  selector: 'app-scheduler-view-add',
  templateUrl: './scheduler-view-add.component.html',
  styleUrls: ['./scheduler-view-add.component.scss']
})
export class SchedulerViewAddComponent {
  public courseScheduleForm!: FormGroup;
  courses!: Observable<CourseDTO[]>;
  teachers!: Observable<TeacherDTO[]>;
  locations!: Observable<CourseLocationDTO[]>;

  days: any[] = [
    { value: 1, label: 'Luni' },
    { value: 2, label: 'Marti' },
    { value: 3, label: 'Miercuri' },
    { value: 4, label: 'Joi' },
    { value: 5, label: 'Vineri' }
  ]

  hoursInterval: string[] = ['8:00', '10:00', '12:00', '14:00', '16:00', '17:30'];

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SchedulerViewAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private schedulerViewService: SchedulerViewService) { }

  ngOnInit(): void {
    this.courseScheduleForm = this.formBuilder.group(this.createFormGroup())

    this.courses = this.schedulerViewService.getCourses(this.data?.activeTeacher?.id);
    this.locations = this.schedulerViewService.getCourseLocations();

    if (this.data?.course) {
      this.teachers = this.schedulerViewService.getTeachersByCourse(this.data.course);
    } else {
      this.courseScheduleForm.get('teacher')?.disable();
    }

    this.courseScheduleForm.get('course')?.valueChanges.subscribe(value => {
      this.courseScheduleForm.get('teacher')?.enable();
      this.teachers = this.schedulerViewService.getTeachersByCourse(value);
    })
  }

  public createFormGroup() {
    return {
      course: [this.data?.course ? this.data?.course : '', [Validators.required]],
      teacher: [this.data?.teacher ? this.data?.teacher : this.data?.activeTeacher ? this.data?.activeTeacher : '', [Validators.required]],
      courseLocation: [this.data?.courseLocation ? this.data?.courseLocation : '', [Validators.required]],
      dayOfWeek: [this.data?.dayOfWeek ? this.data?.dayOfWeek : '', [Validators.required]],
      startsAtHour: [this.data?.startsAtHour ? this.data?.startsAtHour : '', [Validators.required]],
      maxAllocation: [this.data?.maxAllocation ? this.data?.maxAllocation : '', [Validators.required]]
    }
  }

  public close() {
    this.dialogRef.close({ event: 'cancel' })
  }

  public save() {
    this.dialogRef.close({ event: 'save', data: this.data?.id ? { id: this.data?.id, ...this.courseScheduleForm.getRawValue() } : this.courseScheduleForm.getRawValue() });
  }

  public compareWithFn(item1: any, item2: any): boolean {
    return item1.id === item2.id;
  }
}
