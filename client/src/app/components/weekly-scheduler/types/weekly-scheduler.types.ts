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
    metadata?: string;
    metadataLabel?: string;
    at: string;
    color: string;
}