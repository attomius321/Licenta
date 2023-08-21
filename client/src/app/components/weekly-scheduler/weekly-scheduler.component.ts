import { Component, OnInit } from '@angular/core';
import { WeeklySchedulerConfig, WeeklySchedulerData } from './types/weekly-scheduler.types';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ColorGeneratorService } from './services/color-generator.service';

@Component({
  selector: 'weekly-scheduler',
  templateUrl: './weekly-scheduler.component.html',
  styleUrls: ['./weekly-scheduler.component.scss']
})
export class WeeklySchedulerComponent implements OnInit {

  private currentDragged!: WeeklySchedulerData;

  public weeklySchedulerConfig: WeeklySchedulerConfig = {
    hoursInterval: ['8:00', '10:00', '12:00', '14:00', '16:00', '17:30'],
    labelsOfDays: [
      'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri'
    ]
  }

  public weeklySchedulerData: WeeklySchedulerData[] = [
    {
      id: '1',
      dayOfWeek: 1,
      startsAt: '8:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '9/30',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '2',
      dayOfWeek: 3,
      startsAt: '12:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '7/30',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '3',
      dayOfWeek: 5,
      startsAt: '14:00',
      title: 'Baseball',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '4',
      dayOfWeek: 3,
      startsAt: '17:30',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '5',
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Baseball',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',
    },
    {
      id: '6',
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Fotbal',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadataLabel: 'Inscrisi',
      metadata: '5/20',
      color: 'green',
    },
    {
      id: '7',
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Baschet',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '8',
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Lacrosse',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',

    },
    {
      id: '9',
      dayOfWeek: 2,
      startsAt: '12:00',
      title: 'Kickboxing',
      by: 'Andrei Molcut',
      at: 'Baza 2',
      metadata: '5/20',
      color: 'green',
      metadataLabel: 'Inscrisi',

    }
  ]

  public hoursInterval!: string[];

  constructor(private colorGenerator: ColorGeneratorService) { }

  ngOnInit(): void {
    this.hoursInterval = this.weeklySchedulerConfig.hoursInterval;
    this.weeklySchedulerData = this.colorGenerator.addColors(this.weeklySchedulerData);
  }

  get labelOfDays(): string[] {
    return this.weeklySchedulerConfig.labelsOfDays;
  }

  drop(hour: string, day: number) {
    const toModifyData = <WeeklySchedulerData>this.weeklySchedulerData.find((item: WeeklySchedulerData) => item.id === this.currentDragged.id);
    toModifyData.dayOfWeek = day;
    toModifyData.startsAt = hour;
  }

  onDragStart(data: WeeklySchedulerData) {
    this.currentDragged = data;
  }

}
