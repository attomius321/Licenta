export type WeeklySchedulerConfig = {
    hoursInterval: string[];
    labelsOfDays: string[];
}

export type WeeklySchedulerData = {
    dayOfWeek: number;
    startsAt: string;
    title: string;
    by: string;
    metadata: string;
    at: string;
    color: string;
}