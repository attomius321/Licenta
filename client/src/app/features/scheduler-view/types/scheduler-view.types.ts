import { WeeklySchedulerData } from "src/app/components/weekly-scheduler/types/weekly-scheduler.types";
import { CourseLocationDTO } from "../../sport-bases-view/types/sport-bases-view.types";
import { StudentDTO } from "../../students-view/types/students-view.types";
import { CourseDTO, TeacherDTO } from "../../teachers-view/types/teachers-view.types";

export type CourseScheduleDTO = {
    id: string;
    dayOfWeek: number;
    startsAtHour: string;
    endsAtHour: string;
    students: StudentDTO[];
    course: CourseDTO;
    courseLocation: CourseLocationDTO;
    teacher: TeacherDTO;
    maxAllocation: number;
}

export const adaptToWeeklyScheduler = (courseScheduleDTO: CourseScheduleDTO): WeeklySchedulerData =>
({
    id: courseScheduleDTO.id,
    dayOfWeek: courseScheduleDTO.dayOfWeek,
    startsAt: courseScheduleDTO.startsAtHour,
    title: courseScheduleDTO.course.name,
    by: courseScheduleDTO.teacher.lastName + ' ' + courseScheduleDTO.teacher.firstName,
    at: courseScheduleDTO.courseLocation.name,
    metadataLabel: 'Inscrisi',
    enrolled: courseScheduleDTO.students.length,
    maxAllocation: courseScheduleDTO.maxAllocation,
    color: courseScheduleDTO.course.scheduleColor
})



