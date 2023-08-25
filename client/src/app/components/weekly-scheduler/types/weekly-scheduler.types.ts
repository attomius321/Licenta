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
    at: string;
    metadataLabel: string;
    enrolled: number;
    maxAllocation: number;
    color: string;
    isActive?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    canEnroll?: boolean;
}