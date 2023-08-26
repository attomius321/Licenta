import { Component, OnInit } from '@angular/core';
import { SchedulerViewService } from './services/scheduler-view.service';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { WeeklySchedulerData } from 'src/app/components/weekly-scheduler/types/weekly-scheduler.types';
import { CourseScheduleDTO, adaptToWeeklyScheduler } from './types/scheduler-view.types';
import { MatDialog } from '@angular/material/dialog';
import { SchedulerViewAddComponent } from './panels/scheduler-view-add/scheduler-view-add.component';
import { GenericPanelComponent } from 'src/app/components/panels/generic-panel/generic-panel.component';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ScheduleViewPanelComponent } from './panels/schedule-view-panel/schedule-view-panel.component';
import { ROLES } from 'src/app/types/role.types';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.scss']
})
export class SchedulerViewComponent implements OnInit {

  public courseSchedules!: CourseScheduleDTO[];
  public schedulerData!: WeeklySchedulerData[];

  public schedulerConfig = {
    hoursInterval: ['8:00', '10:00', '12:00', '14:00', '16:00', '17:30'],
    labelsOfDays: [
      'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'
    ]
  }

  constructor(private schedulerViewService: SchedulerViewService, public dialog: MatDialog, private tokenStorageService: TokenStorageService) { }

  public allowActions(): boolean {
    return this.tokenStorageService.isUserAdmin() || this.tokenStorageService.isUserTeacher();
  }

  public allowEnroll(): boolean {
    return this.tokenStorageService?.isUserStudent();
  }

  ngOnInit(): void {
    this.refreshData();
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(SchedulerViewAddComponent, {
      data: {
        activeTeacher: this.tokenStorageService.getUser().role === ROLES.ROLE_TEACHER ? this.tokenStorageService.getUser().entity : null
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.schedulerViewService.createCourseSchedule(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    });
  }

  public openViewDialog(id: string): void {
    const courseSchedule = this.courseSchedules.find((data: CourseScheduleDTO) => data.id === id);
    const dialogRef = this.dialog.open(ScheduleViewPanelComponent, {
      data: courseSchedule
    })

    dialogRef.afterClosed().subscribe(result => { })
  }

  public openEditDialog(id: string): void {
    const courseSchedule = this.courseSchedules.find((data: CourseScheduleDTO) => data.id === id);
    const dialogRef = this.dialog.open(SchedulerViewAddComponent, {
      data: courseSchedule
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.schedulerViewService.updateCourseSchedule(result.data).pipe(
          tap(() => this.refreshData()),
          catchError(err => throwError(() => err))
        ).subscribe();
      }
    })
  }

  public openDeleteDialog(id: string): void {
    const courseSchedule = this.courseSchedules.find((data: CourseScheduleDTO) => data.id === id);
    const dialogRef = this.dialog.open(GenericPanelComponent, {
      data: {
        title: 'Stergere',
        content: [
          'Doriti sa continuati?'
        ]
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.schedulerViewService.deleteCourseSchedules([courseSchedule!.id])
          .pipe(
            tap(() => this.refreshData()),
            catchError(err => throwError(() => err))
          )
          .subscribe();
      }
    });
  }

  public openSubscriptionDialog(id: string): void {
    const courseSchedule = this.courseSchedules.find((data: CourseScheduleDTO) => data.id === id);
    const studentId = this.tokenStorageService.getUser().entity.id;
    const dialogRef = this.dialog.open(GenericPanelComponent, {
      data: {
        title: 'Inscriere',
        content: [
          `Urmeaza sa va inscrieti la <b>${courseSchedule?.course.name}</b>, in ziua de <b>${this.schedulerConfig.labelsOfDays[courseSchedule!.dayOfWeek - 1]}</b> de la ora <b>${courseSchedule?.startsAtHour}</b>.`,
          'Doriti sa continuati?'
        ]
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.event == 'save') {
        this.schedulerViewService.enrollToCourse(courseSchedule!.id, studentId)
          .pipe(
            tap(() => this.refreshData()),
            catchError(err => throwError(() => err))
          )
          .subscribe();
      }
    });
  }

  private refreshData(): void {
    this.schedulerViewService.getCourseSchedules()
      .pipe(
        map((courseSchedules: CourseScheduleDTO[]) => {
          this.courseSchedules = courseSchedules;
          return courseSchedules.map((courseSchedule: CourseScheduleDTO) => {
            if (this.tokenStorageService.isUserAdmin()) return adaptToWeeklyScheduler(courseSchedule, this.tokenStorageService.getUser().role);
            else return adaptToWeeklyScheduler(courseSchedule, this.tokenStorageService.getUser().role, this.tokenStorageService.getUser().entity)
          })
        })
      ).subscribe((res: WeeklySchedulerData[]) => this.schedulerData = res);
  }



}
