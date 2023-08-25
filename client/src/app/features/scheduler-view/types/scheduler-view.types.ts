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

const ACTIVATION_MAPPING: { [k: string]: (e: any, entity: any) => boolean } = {
    'ADMIN': (_1: any, _2: any) => true,
    'USER_TEACHER': (entity: TeacherDTO, currentyEntity?: any) => entity.id === currentyEntity.id,
    'USER_STUDENT': (entities: any[], currentEntity: any) => entities.find((entity) => entity.id === currentEntity.id)
}

const isActive = (courseScheduleDTO: CourseScheduleDTO, role: string, currentEntity?: any) => {
    let entities: TeacherDTO | any[];
    if (role === 'USER_STUDENT') entities = courseScheduleDTO.students;
    if (role === 'USER_TEACHER') entities = courseScheduleDTO.teacher;
    return ACTIVATION_MAPPING[role](entities!, currentEntity!);
}

const EDIT_MAPPING: { [k: string]: (e: any, entity: any) => boolean } = {
    'ADMIN': (_1: any, _2: any) => true,
    'USER_TEACHER': (entity: TeacherDTO, currentyEntity?: any) => entity.id === currentyEntity.id,
    'USER_STUDENT': (_1: any, _2: any) => false
}

const canEdit = (courseScheduleDTO: CourseScheduleDTO, role: string, currnetEntity?: any) => {
    return EDIT_MAPPING[role](courseScheduleDTO.teacher, currnetEntity!);
}

const canDelete = (courseScheduleDTO: CourseScheduleDTO, role: string, currnetEntity?: any) => {
    return EDIT_MAPPING[role](courseScheduleDTO.teacher, currnetEntity!);
}

const ENROLL_MAPPING: { [k: string]: (e: any, entity: any) => boolean } = {
    'ADMIN': (_1: any, _2: any) => false,
    'USER_TEACHER': (_1: any, _2: any) => false,
    'USER_STUDENT': (_1: any, _2: any) => true
}

const canEnroll = (courseScheduleDTO: CourseScheduleDTO, role: string, currnetEntity: any) => {
    return ENROLL_MAPPING[role](courseScheduleDTO.teacher, currnetEntity);
}



export const adaptToWeeklyScheduler = (courseScheduleDTO: CourseScheduleDTO, role: string, currentEntity?: any): WeeklySchedulerData =>
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
    color: courseScheduleDTO.course.scheduleColor,
    isActive: isActive(courseScheduleDTO, role, currentEntity),
    canEdit: canEdit(courseScheduleDTO, role, currentEntity),
    canDelete: canDelete(courseScheduleDTO, role, currentEntity),
    canEnroll: canEnroll(courseScheduleDTO, role, currentEntity),
})



