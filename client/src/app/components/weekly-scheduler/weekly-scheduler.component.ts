import { Component, OnInit } from '@angular/core';
import { WeeklySchedulerConfig, WeeklySchedulerData } from './types/weekly-scheduler.types';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'weekly-scheduler',
  templateUrl: './weekly-scheduler.component.html',
  styleUrls: ['./weekly-scheduler.component.scss']
})
export class WeeklySchedulerComponent implements OnInit {

  public weeklySchedulerConfig: WeeklySchedulerConfig = {
    hoursInterval: ['8:00', '10:00', '12:00', '14:00', '16:00', '17:30'],
    labelsOfDays: [
      'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'
    ]
  }

  public weeklySchedulerData: WeeklySchedulerData[] = [
    {
      dayOfWeek: 1,
      startsAt: '8:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '9/30',
      color: 'green'
    },
    {
      dayOfWeek: 3,
      startsAt: '12:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '7/30',
      color: 'green'
    },
    {
      dayOfWeek: 5,
      startsAt: '14:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green'
    },
    {
      dayOfWeek: 3,
      startsAt: '17:30',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green'
    },
    {
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green'
    },
    {
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green'
    }
  ]

  public hoursInterval!: string[];

  constructor() { }

  ngOnInit(): void {
    this.hoursInterval = this.weeklySchedulerConfig.hoursInterval;
  }

  get labelOfDays(): string[] {
    return this.weeklySchedulerConfig.labelsOfDays;
  }

  drop(event: CdkDragDrop<WeeklySchedulerData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log("hello");
  }

}
