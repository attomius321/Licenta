import { Injectable } from '@angular/core';
import { WeeklySchedulerData } from '../types/weekly-scheduler.types';

const COLORS = ['#003F88', '#77166A', '#BF3563', '#EE6F54', '#FFB250', '#F9F871', '#8E1F23', '#948BB7'];

function sortF(object1: any, object2: any) {
    if (object1.title < object2.title)
        return -1;
    if (object1.title > object2.title)
        return 1;
    return 0;
}

@Injectable()
export class ColorGeneratorService {

    constructor() { }

    public addColors(weeklySchedulerDataArray: WeeklySchedulerData[]) {
        const uniqueTitlesMap = [...new Set(weeklySchedulerDataArray.map(week => week.title))].map((value, i) => ({ title: value, color: COLORS[i++] }));
        weeklySchedulerDataArray.forEach(schedule => schedule.color = (uniqueTitlesMap.find(titleMap => titleMap.title === schedule.title) as any).color);
        console.log(uniqueTitlesMap);
        return weeklySchedulerDataArray;
    }
}
