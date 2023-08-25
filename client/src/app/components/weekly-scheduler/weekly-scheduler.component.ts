import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeeklySchedulerConfig, WeeklySchedulerData } from './types/weekly-scheduler.types';

@Component({
  selector: 'weekly-scheduler',
  templateUrl: './weekly-scheduler.component.html',
  styleUrls: ['./weekly-scheduler.component.scss']
})
export class WeeklySchedulerComponent implements OnInit {

  private currentDragged!: WeeklySchedulerData;

  @Input() weeklySchedulerConfig!: WeeklySchedulerConfig;
  @Input() weeklySchedulerData!: WeeklySchedulerData[] | null;

  @Output() onView: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEnroll: EventEmitter<string> = new EventEmitter<string>();

  public hoursInterval!: string[];

  constructor() { }

  ngOnInit(): void {
    this.hoursInterval = this.weeklySchedulerConfig.hoursInterval;
  }

  get labelOfDays(): string[] {
    return this.weeklySchedulerConfig.labelsOfDays;
  }

  maxAllocationPermit(enrolled: number, maxAllocation: number) {
    return enrolled < maxAllocation;
  }

  drop(hour: string, day: number) {
    const toModifyData = <WeeklySchedulerData>(<WeeklySchedulerData[]>this.weeklySchedulerData).find((item: WeeklySchedulerData) => item.id === this.currentDragged.id);
    toModifyData.dayOfWeek = day;
    toModifyData.startsAt = hour;
  }

  onDragStart(data: WeeklySchedulerData) {
    this.currentDragged = data;
  }

  onViewClicked(id: string) {
    this.onView.emit(id);
  }

  onEditClicked(id: string) {
    this.onEdit.emit(id);
  }

  onDeleteClicked(id: string) {
    this.onDelete.emit(id);
  }

  onEnrollClicked(id: string) {
    this.onEnroll.emit(id);
  }

}
