export type WeeklySchedulerConfig = {
    hoursInterval: string[];
    labelsOfDays: string[];
}

export type WeeklySchedulerData = {
    id: string;
    dayOfWeek: number;
    startsAt: string;
    title: string;
    by: string;
    metadataLabel?: string;
    enrolled: number;
    maxAllocation: number;
    at: string;
    color: string;
}